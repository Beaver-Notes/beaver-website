<template>
  <div class="relative w-full max-w-3xl mx-auto no-scrollbar">
    <div
      contenteditable="true"
      class="prose prose-sm max-w-none outline-none text-neutral-800 dark:text-white font-sans text-left overflow-hidden p-4"
    >
      <h1 class="text-lg font-semibold mb-2">Butterfly Life Cycle</h1>
      <p class="mb-2">
        This note outlines the four major stages in a butterfly’s life. It
        begins with the egg, followed by the
        <mark
          class="bg-yellow-200/60 dark:bg-yellow-300/30 dark:text-[color:var(--selected-dark-text)]"
          >larva (caterpillar.)</mark
        >
      </p>
      <div class="relative h-auto overflow-hidden">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/37/Papilionidae_-_Papilio_machaon-2.JPG"
          alt="Butterfly Life Cycle"
          class="w-full object-cover"
        />
      </div>
      <p class="mt-2">
        It then grows rapidly before entering the
        <mark
          class="bg-green-200/50 dark:bg-green-300/30 dark:text-[color:var(--selected-dark-text)]"
          >pupa (chrysalis)</mark
        >
        stage.
      </p>
    </div>
  </div>
  <div
    class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white dark:to-neutral-900 pointer-events-none"
  ></div>
</template>

<script setup></script>
