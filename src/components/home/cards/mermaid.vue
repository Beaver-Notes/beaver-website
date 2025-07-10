<template>
  <div
    contenteditable="true"
    class="prose prose-sm max-w-none outline-none text-neutral-800 dark:text-white font-sans text-left"
  >
    <h1 class="text-lg font-semibold mb-2">Butterfly Life Cycle</h1>
    <p class="mb-2">
      The following Mermaid diagram shows the simple stages of the butterfly
      life cycle:
    </p>
    <VueMermaidRender :content="content" />
  </div>
</template>

<script setup>
import { VueMermaidRender } from "vue-mermaid-render";

const content = `
graph LR
  A[Egg] --> B[Caterpillar]
  B --> C[Chrysalis]
  C --> D[Butterfly]
  D --> A
`;
</script>

<style>
/* Optional styling tweak for Mermaid compatibility */
.mermaid {
  overflow-x: auto;
}
</style>
