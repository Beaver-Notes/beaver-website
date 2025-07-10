<template>
  <div
    contenteditable="true"
    class="prose prose-sm max-w-none outline-none text-neutral-800 dark:text-white font-sans text-left"
  >
    <h1 class="text-lg font-semibold mb-2">Butterfly Life Cycle</h1>
    <p class="mb-2">
      This note outlines the four major stages in a butterfly’s life. It begins
      with the egg, followed by the
      <mark
        class="bg-yellow-200/60 dark:bg-yellow-300/30 dark:text-[color:var(--selected-dark-text)]"
        >larva (caterpillar)</mark
      >, which grows rapidly before entering the
      <mark
        class="bg-green-200/50 dark:bg-green-300/30 dark:text-[color:var(--selected-dark-text)]"
        >pupa (chrysalis)</mark
      >
      stage.
    </p>
  </div>
  <div class="w-full flex justify-center">
    <div
      class="bg-neutral-100 dark:bg-[#353333] p-3 rounded-lg flex items-center justify-between w-full"
    >
      <div class="flex items-center cursor-pointer">
        <RiFileLine class="w-6 h-6 mr-3" />
        <span>Butterfly Life Cycle.pdf</span>
      </div>
      <button class="bg-input p-1 px-3 rounded-lg outline-none">
        <RiDownloadLine class="w-6 h-6" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { RiDownloadLine, RiFileLine } from "vue-remix-icons";
</script>
