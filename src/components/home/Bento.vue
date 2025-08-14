<template>
  <div
    class="grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-4 p-4 max-w-6xl mx-auto"
  >
    <!-- Item 1: Large vertical box -->
    <div
      class="md:row-span-2 md:col-span-2 shadow border dark:border-neutral-600 p-4 rounded-lg flex justify-center"
    >
      <ui-tabs :cards="cards1" />
    </div>

    <!-- Item 2 -->
    <div
      class="md:row-span-2 md:col-span-2 shadow border dark:border-neutral-600 p-4 rounded-xl flex flex-col"
    >
      <div>
        <ui-card
          padding="p-4"
          class="command-prompt w-full max-w-lg mx-auto shadow-xl m-4 rounded-xl"
        >
          <!-- Search Bar -->
          <div class="flex border-b dark:border-b-neutral-600 pb-4 mb-4">
            <RiSearch2Line
              class="w-6 h-6 mr-3 text-neutral-600 dark:text-neutral-300"
            />
            <input
              v-model="searchQuery"
              @input="onInputChange"
              class="w-full bg-transparent outline-none text-neutral-800 dark:text-white dark:text-neutral-200"
              placeholder="Search files or type '>' to show commands"
            />
          </div>

          <!-- List -->
          <ui-list
            class="max-h-80 overflow-auto space-y-1 scroll command-scroll"
          >
            <ui-list-item
              v-for="(item, index) in filteredItems"
              :key="item.id"
              :active="index === state.selectedIndex"
              :class="[
                'cursor-pointer flex items-start justify-between p-2 rounded-md transition',
                'hover:text-amber-400 hover:bg-amber-400/10 dark:hover:bg-amber-400/10',
                index === state.selectedIndex
                  ? 'bg-amber-400/10 dark:bg-amber-400/10'
                  : '',
              ]"
            >
              <div class="w-full">
                <template v-if="isCommandMode">
                  <p
                    class="text-sm flex items-center"
                    :class="
                      index === state.selectedIndex ? 'text-amber-400' : ''
                    "
                  >
                    <span class="mr-2 text-lg"></span>
                    {{ item.title }}
                  </p>
                </template>
                <template v-else>
                  <p
                    class="flex justify-between text-sm font-medium"
                    :class="
                      index === state.selectedIndex
                        ? 'text-amber-400'
                        : 'text-neutral-800 dark:text-white dark:text-neutral-200'
                    "
                  >
                    <span>{{
                      item.title || translations.commandprompt.untitlednote
                    }}</span>
                    <span
                      class="text-xs"
                      :class="
                        index === state.selectedIndex
                          ? 'text-amber-400'
                          : 'text-neutral-500 dark:text-neutral-300'
                      "
                    >
                      {{ formatDate(item.updatedAt) }}
                    </span>
                  </p>
                  <p
                    v-if="!item.isLocked"
                    class="text-xs truncate text-left"
                    :class="
                      index === state.selectedIndex
                        ? 'text-amber-400'
                        : 'text-neutral-500 dark:text-neutral-300'
                    "
                  >
                    {{ item.content }}
                  </p>
                </template>
              </div>
            </ui-list-item>
          </ui-list>
        </ui-card>
      </div>
      <p
        class="text-3xl font-bold py-2 text-left text-neutral-800 dark:text-white"
      >
        Command Prompt
      </p>
      <p class="text-neutral-700 dark:text-neutral-100 text-left mb-4">
        Search notes by title, content, or label, and use commands to quickly
        access settings
      </p>
    </div>

    <!-- Item 4 -->
    <div
      class="md:col-span-1 shadow border dark:border-neutral-600 p-4 rounded-lg"
    >
      <div class="flex justify-start items-center">
        <p
          class="text-3xl font-bold py-2 text-left text-neutral-800 dark:text-white"
        >
          Share
        </p>
      </div>
      <p class="text-neutral-700 dark:text-neutral-100 text-left mb-4">
        Share your notes with your friends and other apps
      </p>
      <div
        ref="container"
        class="flex items-center text-neutral-600 dark:text-[color:var(--selected-dark-text)] dark:text-neutral-50 overflow-x-auto sm:overflow-x-hidden scroll border-b dark:border-neutral-600 z-20 w-full top-0 mb-4"
      >
        <!-- Main Buttons -->
        <button class="p-1 transition hoverable rounded-lg">
          <RiMicLine class="w-6 h-6 text-neutral-800 dark:text-white" />
        </button>
        <button class="p-1 transition hoverable rounded-lg">
          <RiLink class="w-6 h-6 text-neutral-800 dark:text-white" />
        </button>
        <button class="p-1 transition hoverable rounded-lg">
          <RiFile2Line class="w-6 h-6 text-neutral-800 dark:text-white" />
        </button>
        <button class="p-1 transition hoverable rounded-lg">
          <RiTableLine class="w-6 h-6 text-neutral-800 dark:text-white" />
        </button>
        <button class="p-1 transition hoverable rounded-lg">
          <RiMoreFill class="w-6 h-6 text-neutral-800 dark:text-white" />
        </button>

        <!-- Divider -->
        <hr class="border dark:border-neutral-600 h-6 mx-2" />

        <!-- Popover -->
        <ui-popover>
          <template #trigger>
            <button class="p-1 transition hoverable rounded-lg">
              <RiShare2Line class="w-6 h-6 text-neutral-800 dark:text-white" />
            </button>
          </template>
          <button
            v-for="action in share"
            :key="action.name"
            class="flex items-center p-2 rounded-lg text-black dark:text-[color:var(--selected-dark-text)] cursor-pointer hover:bg-neutral-100 dark:hover:bg-[#353333] transition duration-200"
          >
            <component
              :is="action.icon"
              class="w-6 h-6 text-neutral-800 dark:text-white"
              aria-hidden="true"
            />
            <div
              class="text-left overflow-hidden text-ellipsis whitespace-nowrap"
            >
              <p
                class="font-medium text-neutral-800 dark:text-white dark:text-[color:var(--selected-dark-text)] pl-2"
              >
                {{ action.title }}
              </p>
            </div>
          </button>
        </ui-popover>

        <!-- Divider -->
        <hr class="border dark:border-neutral-600 h-6 mx-2" />

        <!-- Final Button -->
        <button class="p-1 transition hoverable rounded-lg">
          <RiArticleLine class="w-6 h-6 text-neutral-800 dark:text-white" />
        </button>
      </div>

      <div
        contenteditable="true"
        class="prose prose-sm max-w-none outline-none text-neutral-800 dark:text-white font-sans text-left"
      >
        <h1 class="text-lg font-semibold mb-2">Butterfly Life Cycle</h1>
        <p class="mb-2">
          This note outlines the four major stages in a butterfly’s life. It
          begins with the egg, followed by the
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
    </div>

    <!-- Item 5 -->
    <div
      class="md:col-span-2 shadow border dark:border-neutral-600 p-4 rounded-lg flex items-center justify-center"
    >
      <ui-tabs :cards="media" />
    </div>

    <!-- Item 6 -->
    <div
      class="md:col-span-1 shadow border dark:border-neutral-600 p-4 rounded-lg flex flex-col items-start space-y-4"
    >
      <p class="text-3xl font-bold text-left text-neutral-800 dark:text-white">
        Sync
      </p>

      <p class="text-neutral-700 dark:text-neutral-100 text-left">
        Choose your own cloud provider to sync data across your devices
      </p>

      <div class="flex items-center justify-center w-full">
        <Sync />
      </div>
    </div>

    <!-- Item 7 -->
    <div
      class="md:col-span-2 shadow border dark:border-neutral-600 p-4 rounded-lg flex flex-col items-star"
    >
      <p class="text-3xl font-bold text-left text-neutral-800 dark:text-white">
        Drawing
      </p>

      <p class="text-neutral-700 dark:text-neutral-100 text-left">
        Insert sketches, drawings, or handwritten sections into your notes from
        any device. No worries, your drawings will stay with you, even when you
        share your notes with others
      </p>
      <Draw />
    </div>

    <div
      class="md:col-span-2 shadow border dark:border-neutral-600 p-4 rounded-lg flex items-center justify-center"
    >
      <ui-tabs :cards="stem" />
    </div>
  </div>
</template>

<script setup>
import {
  RiSearch2Line,
  RiShare2Line,
  RiFileTextFill,
  RiPagesLine,
  RiArticleLine,
  RiMarkdownLine,
  RiMoreFill,
  RiTableLine,
  RiFile2Line,
  RiLink,
  RiMicLine,
} from "vue-remix-icons";
import CardContent1 from "./cards/note-link.vue";
import CardContent2 from "./cards/labels.vue";
import { ref, computed, reactive } from "vue";
import Files from "./cards/files.vue";
import Image from "./cards/image.vue";
import Audio from "./cards/audio.vue";
import Math from "./cards/math.vue";
import Code from "./cards/code.vue";
import Mermaid from "./cards/mermaid.vue";
import Sync from "./cards/sync.vue";
import Draw from "./cards/draw.vue";

const searchQuery = ref("");
const state = reactive({ selectedIndex: 0 });

const notes = [
  {
    id: "1",
    title: "Shopping List",
    content: "Milk, Eggs, Bread",
    updatedAt: new Date(),
  },
  {
    id: "2",
    title: "Work Notes",
    content: "Project kickoff tomorrow",
    updatedAt: new Date(),
  },
];
const commands = [
  { id: "cmd-1", title: "Create New Note", action: "createNote" },
  { id: "cmd-2", title: "Open Settings", action: "openSettings" },
  { id: "cmd-3", title: "Toggle Dark Mode", action: "toggleTheme" },
];

const isCommandMode = computed(() => searchQuery.value.trim().startsWith(">"));

const filteredItems = computed(() => {
  const query = searchQuery.value.replace(/^>/, "").toLowerCase();
  return isCommandMode.value
    ? commands.filter((c) => c.title.toLowerCase().includes(query))
    : notes.filter(
        (n) =>
          n.title.toLowerCase().includes(query) ||
          n.content.toLowerCase().includes(query)
      );
});

const onInputChange = () => {
  state.selectedIndex = 0; // Reset index
};

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

const share = computed(() => {
  return [
    {
      name: "Bea",
      title: "BEA",
      icon: RiFileTextFill,
    },
    {
      name: "html",
      title: "HTML",
      icon: RiPagesLine,
    },
    {
      name: "pdf",
      title: "PDF",
      icon: RiArticleLine,
    },
    {
      name: "markdown",
      title: "MD",
      icon: RiMarkdownLine,
    },
  ];
});

const cards1 = [
  {
    id: 1,
    label: "Tags",
    content: CardContent1,
    bg: "bg-white dark:bg-neutral-900",
    highlightBg: "bg-amber-400",
    title: "Note Linking",
    description:
      "Create connections between your notes, ideas, and more, building a web of information",
  },
  {
    id: 2,
    label: "Labels",
    content: CardContent2,
    bg: "bg-white dark:bg-neutral-900",
    highlightBg: "bg-amber-400",
    title: "Labels",
    description:
      "Organize your notes with labels to simplify searching and browsing",
  },
];

const stem = [
  {
    id: 1,
    label: "Math",
    content: Math,
    bg: "bg-white dark:bg-neutral-900",
    highlightBg: "bg-amber-400",
    title: "Math",
    description:
      "Type LaTeX equations and see them come to life instantly, making your math notes clear and easy to follow",
  },
  {
    id: 2,
    label: "Code",
    content: Code,
    bg: "bg-white dark:bg-neutral-900",
    highlightBg: "bg-amber-400",
    title: "Code",
    description:
      "Drop your code snippets into notes with syntax highlighting so they’re easy to read and follow",
  },
  {
    id: 3,
    label: "Diagram",
    content: Mermaid,
    bg: "bg-white dark:bg-neutral-900",
    highlightBg: "bg-amber-400",
    title: "Diagram",
    description:
      "Type Mermaid and watch it turn into clear visuals right inside your notes—from flowcharts to pie charts",
  },
];

const media = [
  {
    id: 1,
    label: "Files",
    content: Files,
    bg: "bg-white dark:bg-neutral-900",
    highlightBg: "bg-amber-400",
    title: "Files",
    description:
      "Place PDFs, presentations, and more in your notes to keep your digital life organized",
  },
  {
    id: 2,
    label: "Images",
    content: Image,
    bg: "bg-white dark:bg-neutral-900",
    highlightBg: "bg-amber-400",
    title: "Images",
    description:
      "Nothing special to see here, just add images and resize them like in any other editor.",
  },
  {
    id: 3,
    label: "Audio",
    content: Audio,
    bg: "bg-white dark:bg-neutral-900",
    highlightBg: "bg-amber-400",
    title: "Audio",
    description:
      "Record lectures or add audio files to your notes for easy reference later",
  },
];
</script>
