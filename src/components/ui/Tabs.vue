<template>
  <div class="w-full mx-auto">
    <!-- Cards -->
    <div class="relative h-auto sm:h-80 overflow-hidden">
      <transition name="fade" mode="out-in">
        <div
          :key="cards[active - 1].id"
          class="inset-0 rounded-lg flex flex-col justify-center overflow-hidden max-h-full"
          :class="cards[active - 1].bg"
        >
          <p
            class="text-3xl font-bold py-2 text-left text-neutral-800 dark:text-white"
          >
            {{ cards[active - 1].title }}
          </p>
          <p class="text-neutral-700 dark:text-neutral-100 text-left mb-4">
            {{ cards[active - 1].description }}
          </p>
          <div class="w-full h-full overflow-y-auto max-h-72 sm:max-h-64 p-4">
            <component :is="cards[active - 1].content" />
          </div>
        </div>
      </transition>
    </div>

    <!-- Button group with sliding highlight -->
    <div class="relative mt-2 w-full">
      <div
        class="relative flex rounded-full bg-neutral-100 dark:bg-neutral-700 p-1"
      >
        <!-- Sliding highlight -->
        <div
          class="absolute left-0 top-1 bottom-1 rounded-full transition-all duration-300 ease-out"
          :style="highlightStyle"
          :class="cards[active - 1].highlightBg"
        />

        <!-- Buttons -->
        <button
          v-for="(btn, index) in cards"
          :key="btn.id"
          :ref="(el) => (btnRefs[index] = el)"
          @click="active = btn.id"
          class="relative z-10 flex-1 px-3 py-2 text-center font-semibold transition-colors duration-300 rounded-full text-sm sm:text-base px-4"
          :class="
            active === btn.id
              ? 'text-white'
              : 'text-neutral-700 dark:text-neutral-100 dark:text-neutral-300'
          "
        >
          <span class="block truncate">{{ btn.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, nextTick, onUnmounted } from "vue";

const props = defineProps({
  cards: {
    type: Array,
    required: true,
    // Example:
    // [{ id: 1, label: 'Tab 1', content: MyComponent1, bg: 'bg-blue-200', highlightBg: 'bg-blue-500' }, ...]
  },
});

const active = ref(props.cards[0]?.id || 1);
const btnRefs = ref([]);
const highlightStyle = ref({
  width: "0px",
  transform: "translateX(0px)",
});

function updateHighlight() {
  if (!btnRefs.value.length) return;

  const index = props.cards.findIndex((card) => card.id === active.value);
  if (index === -1) return;

  const activeBtn = btnRefs.value[index];
  if (!activeBtn) return;

  // Get the parent container to calculate relative positions
  const container = activeBtn.parentElement;
  const btnRect = activeBtn.getBoundingClientRect();

  const width = btnRect.width;
  const left = activeBtn.offsetLeft;

  highlightStyle.value = {
    width: width + "px",
    transform: `translateX(${left}px)`,
  };
}

// Debounced resize handler
let resizeTimeout;
function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateHighlight();
  }, 100);
}

onMounted(() => {
  nextTick(() => {
    updateHighlight();
  });

  // Add resize listener for responsive updates
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  clearTimeout(resizeTimeout);
});

watch(active, () => {
  nextTick(() => {
    updateHighlight();
  });
});

// Watch for changes in cards prop that might affect layout
watch(
  () => props.cards,
  () => {
    nextTick(() => {
      updateHighlight();
    });
  },
  { deep: true }
);
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
