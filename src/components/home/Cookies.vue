<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed bottom-6 right-6 max-w-xs p-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg shadow-lg text-neutral-800 dark:text-neutral-200 z-20"
    >
      <p class="text-lg font-bold">No need to worry about cookies</p>
      <p class="text-sm">
        Beaver uses Umami to anonymously track usage, so we can see how popular
        the app is without collecting any personal information.
      </p>
      <button
        @click="accept"
        class="w-full mt-2 inline-block rounded-lg bg-amber-400 p-2 text-sm font-semibold text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        Got it
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    // Check if consent already given
    if (!localStorage.getItem("beaverCookieConsent")) {
      this.visible = true;
    }
  },
  methods: {
    accept() {
      localStorage.setItem("beaverCookieConsent", "true");
      this.visible = false;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
