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
      class="mt-2 mb-2 p-3 w-full rounded-lg bg-neutral-100 dark:bg-[#353333] flex items-center justify-between"
    >
      <audio id="audioPlayer" class="hidden">
        <source src="" type="audio/mp3" />
      </audio>

      <div class="flex items-center sm:border-r-2 dark:border-neutral-600 rtl:border-none">
        <button class="px-3 py-1 rounded hidden sm:block">
          <RiReplay15Line class="w-6 h-6" />
        </button>
        <button
          class="p-2 ml-2 rounded-full text-white bg-primary hover:bg-secondary"
        >
          <RiPlayFill class="w-6 h-6" />
        </button>
        <button class="px-3 py-1 ml-2 hidden sm:block sm:block">
          <RiForward15Fill class="w-6 h-6" />
        </button>
      </div>

      <span class="ml-4 text-sm text-neutral-700 dark:text-neutral-300"
        >00:03</span
      >

      <div
        class="relative flex w-full mx-4 h-1.5 bg-gray-200 dark:bg-neutral-700 rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow="0"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          class="bg-primary dark:bg-primary text-white text-xs text-center transition duration-500 rounded-full"
          style="width: 30%"
        ></div>
        <div
          class="absolute top-0 left-[30%] w-4 h-full bg-secondary rounded-full -translate-x-1/2"
        ></div>
      </div>

      <span class="ml-4 text-sm text-neutral-700 dark:text-neutral-300"
        >00:09</span
      >

      <input
        type="range"
        class="hidden w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
        min="0"
        max="100"
        value="30"
      />
      </div>
  </div>
</template>

<script setup>
import {
  RiForward15Fill,
  RiPlayFill,
  RiReplay15Line,
} from "vue-remix-icons";
</script>
