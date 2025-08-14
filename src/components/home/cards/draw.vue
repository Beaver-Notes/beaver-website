<template>
  <div class="relative h-full">
    <div class="dotted-bg dark:hidden absolute inset-0"></div>
    <div class="dotted-bg-dark hidden dark:block absolute inset-0"></div>
    <!-- Navigation bar container -->
    <div
      class="relative left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
    >
      <!-- Tool Buttons -->
      <div
        class="bg-neutral-800 rounded-2xl shadow-lg px-2 py-1 flex items-center gap-2"
      >
        <button
          v-for="tool in tools"
          :key="tool.name"
          @click="selectTool(tool.name)"
          :class="[
            'w-10 h-10 flex items-center justify-center rounded-md transition text-white hover:bg-neutral-700',
            selectedTool === tool.name ? 'bg-neutral-700 text-amber-400' : '',
          ]"
        >
          <component :is="tool.icon" class="w-6 h-6" />
        </button>

        <!-- Undo / Redo -->
        <button
          disabled
          class="w-10 h-10 text-white opacity-40 rounded-md transition hover:bg-neutral-700"
        >
          <RiArrowGoBackLine class="w-6 h-6" />
        </button>
        <button
          disabled
          class="w-10 h-10 text-white opacity-40 rounded-md transition hover:bg-neutral-700"
        >
          <RiArrowGoForwardLine class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Decorative SVG area at the bottom -->
    <div
      class="relative sm:absolute bottom-1 left-1/2 -translate-x-1/2 flex items-center justify-center w-full"
    >
      <div class="flex justify-center items-center">
        <img src="../../../assets/home/draw.webp" class="w-full dark:hidden" />
        <img
          src="../../../assets/home/draw-dark.webp"
          class="w-full hidden dark:block"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  RiFocus3Line,
  RiBallPenLine,
  RiMarkPenLine,
  RiEraserLine,
  RiArrowGoBackLine,
  RiArrowGoForwardLine,
} from "vue-remix-icons";
import { ref } from "vue";

const tools = [
  { name: "select", icon: RiFocus3Line },
  { name: "pen", icon: RiBallPenLine },
  { name: "highlighter", icon: RiMarkPenLine },
  { name: "eraser", icon: RiEraserLine },
];

const selectedTool = ref("select");

function selectTool(name) {
  selectedTool.value = name;
}
</script>

<style scoped>
.dotted-bg {
  background-image: radial-gradient(#d1d5db 2px, transparent 2px);
  background-size: 20px 20px;
}

.dotted-bg-dark {
  background-image: radial-gradient(#6b7280 2px, transparent 2px);
  background-size: 20px 20px;
}
</style>
