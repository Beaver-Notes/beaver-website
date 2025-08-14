// Note-Link.vue
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
      stage. After metamorphosis, the adult butterfly emerges, ready to continue
      the cycle. For a deeper look see:
      <ui-popover padding="p-2 flex flex-col print:hidden">
        <template #trigger>
          <button
            contenteditable="true"
            class="inline-block font-normal cursor-text select-text"
            spellcheck="false"
          >
            @@
          </button>
        </template>

        <button
          v-for="note in notesList"
          :key="note.name"
          class="flex p-2 rounded-lg text-black dark:text-[color:var(--selected-dark-text)] cursor-pointer hover:bg-amber-400/10 hover:text-amber-400 dark:hover:bg-[#353333] transition duration-200"
        >
          <div
            class="text-left overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <p class="font-medium pl-2">
              {{ note.title }}
            </p>
          </div>
        </button>
      </ui-popover>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notesList: [
        {
          name: "EggStage",
          title: "Butterfly Egg Stage",
        },
        {
          name: "PlantRole",
          title: "Host Plants and Diets",
        },
        {
          name: "Metamorphosis",
          title: "Metamorphosis",
        },
      ],
    };
  },
};
</script>
