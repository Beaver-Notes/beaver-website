<template>
  <div
    contenteditable="false"
    class="prose prose-sm max-w-none outline-none text-neutral-800 dark:text-white font-sans text-left"
  >
    <h1 class="text-lg font-semibold mb-2">Bubble Sort Algorithm</h1>
    <p class="mb-2">
      A bubble sort algorithm, is a simple sorting technique that repeatedly
      steps through the list, compares adjacent elements, and swaps them if they
      are in the wrong order.
    </p>
    <div
      class="relative border dark:border-neutral-600 rounded-md bg-neutral-100 dark:bg-neutral-800 p-2"
    >
      <!-- Controls: Right-aligned -->
      <div class="absolute right-2 flex gap-2 items-center z-10">
        <select
          v-model="selectedLanguage"
          class="text-xs px-2 py-1 rounded bg-white dark:bg-neutral-700 text-black dark:text-white"
        >
          <option :value="null">auto</option>
          <option disabled>—</option>
          <option v-for="(lang, i) in languageList" :key="i" :value="lang">
            {{ lang }}
          </option>
        </select>
        <button
          class="text-neutral-500 hover:text-black dark:hover:text-white"
          @click="copyCode"
        >
          <RiClipboardLine class="w-4 h-4" />
        </button>
      </div>

      <!-- Rendered highlighted code -->
      <div class="code-block">
        <pre class="mt-1 overflow-auto text-sm leading-snug">
        <code class="hljs text-sm" v-html="highlightedCode"></code>
      </pre>
      </div>
    </div>
  </div>
  <div
    class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-neutral-900 pointer-events-none"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { RiClipboardLine } from "vue-remix-icons";
import { createLowlight, common } from "lowlight";
import { toHtml } from "hast-util-to-html";

const lowlight = createLowlight(common);

const code = ref(`def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

numbers = [64, 34, 25, 12, 22, 11, 90]
sorted_numbers = bubble_sort(numbers)
print("Sorted array:", sorted_numbers)`);

const selectedLanguage = ref<string | null>("python");

const languageList = lowlight.listLanguages();

const highlightedCode = computed(() => {
  try {
    const tree = selectedLanguage.value
      ? lowlight.highlight(selectedLanguage.value, code.value)
      : lowlight.highlightAuto(code.value);
    return toHtml(tree).trim();
  } catch (error) {
    return `<code>${code.value}</code>`;
  }
});

function copyCode() {
  navigator.clipboard.writeText(code.value).then(() => {});
}
</script>

<style scoped>
select {
  z-index: 10;
}
</style>

<style>
@import "highlight.js/styles/github.css"; /* Light */
@import "highlight.js/styles/github-dark.css"; /* Dark */

.hljs {
  background: transparent !important;
}

/* Force light theme for light mode */
@media (prefers-color-scheme: light) {
  .hljs {
    color: #24292e; /* github.css default text */
    background: transparent !important;
  }
}

/* Dark mode theme override */
@media (prefers-color-scheme: dark) {
  @import "highlight.js/styles/github-dark.css";
}

.code-block {
  position: relative;

  select {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>
