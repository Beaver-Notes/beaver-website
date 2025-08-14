<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="ui-popover inline-block" :class="{ hidden: to }">
    <div ref="targetEl" class="ui-popover__trigger h-full inline-block">
      <slot name="trigger" v-bind="{ isShow }"></slot>
    </div>

    <div
      ref="content"
      class="ui-popover__content bg-white dark:bg-neutral-800 rounded-lg shadow-xl border dark:border-neutral-600"
      :class="[padding]"
    >
      <slot v-bind="{ isShow }"></slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, shallowRef, onUnmounted } from "vue";
import createTippy from "@/lib/tippy";

export default {
  name: "ui-popover",
  props: {
    placement: {
      type: String,
      default: "bottom",
    },
    trigger: {
      type: String,
      default: "click",
    },
    padding: {
      type: String,
      default: "p-2",
    },
    to: {
      type: [String, Object, HTMLElement],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: true, // Changed from false to true
    },
  },
  emits: ["update:modelValue", "show", "trigger", "close"],
  setup(props, { emit }) {
    const targetEl = ref(null);
    const content = ref(null);
    const isShow = ref(props.modelValue);
    const instance = shallowRef(null);

    // Sync external prop -> internal state
    watch(
      () => props.modelValue,
      (value) => {
        if (value === isShow.value) return;
        isShow.value = value;
        value ? instance.value?.show() : instance.value?.hide();
      }
    );

    // Sync internal state -> external v-model
    watch(isShow, (val) => {
      emit("update:modelValue", val);
    });

    // Handle disable
    watch(
      () => props.disabled,
      (value) => {
        if (value) {
          instance.value?.hide();
          instance.value?.disable();
        } else {
          instance.value?.enable();
        }
      }
    );

    onMounted(() => {
      const target = props.to
        ? typeof props.to === "string"
          ? document.querySelector(props.to)
          : props.to
        : targetEl.value;

      // Initialize Tippy
      instance.value = createTippy(target, {
        role: "popover",
        theme: null,
        content: content.value,
        placement: props.placement,
        trigger: props.trigger,
        interactive: true,
        appendTo: () => document.body,
        onShow: () => {
          emit("show");
          isShow.value = true;
        },
        onHide: () => {
          emit("close");
          isShow.value = false;
        },
        onTrigger: () => emit("trigger"),
      });

      // Intersection Observer logic
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && props.modelValue) {
              instance.value?.show();
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      if (target) {
        observer.observe(target);
      }

      // Don't show until in view
      instance.value?.hide();

      // Cleanup
      onUnmounted(() => {
        observer.disconnect();
        instance.value?.destroy();
      });
    });

    return {
      isShow,
      content,
      targetEl,
    };
  },
};
</script>
