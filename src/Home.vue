<template>
  <div class="relative isolate px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="mb-8 flex justify-center">
        <div
          class="block sm:hidden text-sm relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-600 dark:text-neutral-200 ring-1 ring-neutral-900/10 dark:ring-neutral-300/10 dark:hover:ring-neutral-300/20 hover:ring-neutral-900/20 hover:shadow-amber-400 hover:shadow-lg transition-shadow duration-300"
        >
          🎉 Beaver Pocket beta now open
          <a href="#/Pocket" class="font-semibold text-amber-500"
            ><span class="absolute inset-0" aria-hidden="true"></span>Read more
            <span aria-hidden="true">&rarr;</span></a
          >
        </div>
        <div
          class="hidden sm:block text-sm relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-600 dark:text-neutral-200 ring-1 ring-neutral-900/10 dark:ring-neutral-300/10 dark:hover:ring-neutral-300/20 hover:ring-neutral-900/20 hover:shadow-amber-400 hover:shadow-lg transition-shadow duration-300"
        >
          🎉 4.2.0 now out
          <a href="#/Download" class="font-semibold text-amber-500"
            ><span class="absolute inset-0" aria-hidden="true"></span>Read more
            <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
      <div class="text-center">
        <h1
          class="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
        >
          Your notes never leave your device.
        </h1>
        <p
          class="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-200"
        >
          A local-first open-source notes app. No cloud. No AI. No tracking.
        </p>
        <div
          class="mt-5 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div
            class="group flex justify-center items-center relative overflow-hidden"
          >
            <a
              href="#/Download"
              class="rounded-lg bg-amber-400 px-4 py-2 text-md font-semibold text-white shadow-sm transition duration-200 hover:bg-amber-400/90 hover:shadow-md"
            >
              Download now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex sm:justify-center sm:items-center space-x-4 overflow-hidden sm:overflow-visible mx-auto max-w-7xl px-6 lg:px-8"
  >
    <div class="w-[64rem] sm:w-full rounded-2xl">
      <img
        src="/src/assets/home/space-light.webp"
        class="w-[32rem] sm:w-full max-w-none rounded-lg md:rounded-xl ring-neutral-400/10 md:-ml-4 lg:-ml-0 dark:hidden"
      />
      <img
        src="/src/assets/home/space-dark.webp"
        class="w-[32rem] sm:w-full max-w-none rounded-lg md:rounded-xl ring-neutral-400/10 md:-ml-4 lg:-ml-0 hidden dark:block"
      />
    </div>
  </div>
  <div class="mt-24">
    <Featured />
  </div>
  <div class="overflow-hidden py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
            >
              Designed to stay out of your way
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-600 dark:text-neutral-200 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt
                  class="inline font-semibold text-neutral-900 dark:text-white"
                >
                  <component
                    :is="feature.icon"
                    class="absolute left-1 top-1 h-5 w-5 text-amber-400"
                    aria-hidden="true"
                  />
                  {{ feature.name }}
                </dt>
                {{ " " }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="w-[64rem] rounded-2xl">
          <img
            src="/src/assets/home/app.webp"
            alt="Product screenshot"
            class="w-[32rem] sm:w-full max-w-none rounded-lg sm:rounded-xl ring-neutral-400/10 md:-ml-4 lg:-ml-0 dark:hidden"
            width="2432"
            height="1442"
          />
          <img
            src="/src/assets/home/app-dark.webp"
            alt="Product screenshot"
            class="w-[32rem] sm:w-full max-w-none rounded-lg sm:rounded-xl ring-neutral-400/10 md:-ml-4 lg:-ml-0 hidden dark:block"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="text-center mx-4">
    <h1
      class="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
    >
      Built to work your way
    </h1>
    <p class="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-200">
      All the essential tools for taking, organizing, and sharing your notes,
      right out of the box.
    </p>
    <Bento />
  </div>

  <div class="relative py-24 sm:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
      <h2
        class="text-4xl font-bold text-neutral-900 dark:text-white sm:text-5xl lg:text-6xl tracking-tight"
      >
        Download Beaver Notes
      </h2>
      <p class="mt-4 text-lg text-neutral-600 dark:text-neutral-200 sm:text-xl">
        Keep your notes private. All features local-first, no tracking.
      </p>

      <div
        class="mt-5 flex flex-col sm:flex-row items-center justify-center gap-6"
      >
        <div
          class="group flex justify-center items-center relative overflow-hidden"
        >
          <a
            href="#/Download"
            class="rounded-lg bg-amber-400 px-4 py-2 text-md font-semibold text-white shadow-sm transition duration-200 hover:bg-amber-400/90 hover:shadow-md"
          >
            Download now
          </a>
        </div>
      </div>
    </div>
  </div>

  <Cookies />
</template>

<script>
import { markRaw } from "vue";
import {
  RiSignalWifiOffLine,
  RiKeyboardLine,
  RiOpenSourceLine,
} from "vue-remix-icons";
import Bento from "@/components/home/Bento.vue";
import Featured from "./components/home/Featured.vue";
import Cookies from "./components/home/Cookies.vue";

export default {
  components: {
    Cookies,
    Bento,
    Featured,
  },
  data() {
    return {
      features: [
        {
          name: "Offline First.",
          description:
            "Your notes are stored locally. No accounts. No servers. You decide if and how they sync.",
          icon: markRaw(RiSignalWifiOffLine),
        },
        {
          name: "Keyboard Friendly.",
          description:
            "Markdown, commands, and shortcuts, no mouse gymnastics, no setup ritual.",
          icon: markRaw(RiKeyboardLine),
        },
        {
          name: "Open-source.",
          description:
            "MIT-licensed. No telemetry. No growth hacks. Just software you can trust.",
          icon: markRaw(RiOpenSourceLine),
        },
      ],
    };
  },
};
</script>
