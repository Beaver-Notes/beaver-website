<script setup>
import { ref, computed } from "vue";
import Home from "./Home.vue";
import NotFound from "./NotFound.vue";
import Download from "./Download.vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import Pocket from "./Pocket.vue";
import Packages from "./Packages.vue";
import Terms from "./Terms.vue";
import Privacy from "./Privacy.vue";
import { RiCloseLine, RiMenuLine } from "vue-remix-icons";

const routes = {
  "/": Home,
  "/Download": Download,
  "/Pocket": Pocket,
  "/Packages": Packages,
  "/Terms": Terms,
  "/Privacy": Privacy,
};

const mobileMenuOpen = ref(false);

const navigation = [
  { name: "Home", href: "#/" },
  { name: "Download", href: "#/Download" },
  { name: "Github", href: "https://github.com/Beaver-Notes/Beaver-Notes" },
  {
    name: "Docs",
    href: "https://docs.beavernotes.com",
  },
  { name: "Pocket", href: "#/Pocket" },
  { name: "Blog", href: "https://blog.beavernotes.com" },
  { name: "☕️ Donate", href: "https://www.buymeacoffee.com/beavernotes" },
];

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5 flex items-center space-x-2">
          <span class="sr-only">Beaver Notes Logo</span>
          <img class="h-8 w-auto" src="/src/assets/logo.png" alt="" />
          <h1 class="text-lg font-bold">Beaver Notes</h1>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700 dark:text-neutral-100"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <RiMenuLine class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          @click="mobileMenuOpen = false"
          class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
        >
          {{ item.name }}
        </a>
      </div>
    </nav>
    <Dialog
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-neutral-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Beaver Notes</span>
            <img class="h-8 w-auto" src="/src/assets/logo.png" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-neutral-700 dark:text-neutral-100"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <RiCloseLine class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-neutral-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  <component :is="currentView" />

  <!-- component -->
  <!-- Foooter -->
  <section class="bg-white dark:bg-neutral-900 mb-0">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <a
            href="#/Privacy"
            class="text-base leading-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200 dark:text-white"
          >
            Privacy Policy
          </a>
        </div>
        <div class="px-5 py-2">
          <a
            href="https://beaver-notes.github.io/Beaver-Blog/"
            class="text-base leading-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200 dark:text-white"
          >
            Blog
          </a>
        </div>

        <div class="px-5 py-2">
          <a
            href="#/Terms"
            class="text-base leading-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200 dark:text-white"
          >
            Terms
          </a>
        </div>
      </nav>
      <div class="flex justify-center mt-8 space-x-6">
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes"
          class="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
        >
          <span class="sr-only">GitHub</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </svg>
        </a>
        <a
          href="https://www.reddit.com/r/BeaverNotes/"
          class="text-neutral-400 hover:text-orange-600"
        >
          <span class="sr-only">Reddit</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34c-34.5 3.7-61.4 33-61.4 68.4l0 .2c-37.5 1.6-71.8 12.3-99 29.1c-10.1-7.8-22.8-12.5-36.5-12.5c-33 0-59.8 26.8-59.8 59.8c0 24 14.1 44.6 34.4 54.1c2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54c0-33-26.8-59.8-59.8-59.8c-13.7 0-26.3 4.6-36.4 12.4c-27.4-17-62.1-27.7-100-29.1l0-.2c0-25.4 18.9-46.5 43.4-49.9l0 0c4.4 18.8 21.3 32.8 41.5 32.8zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6s-31.4-8.8-30.4-30.5s15.4-38.3 32.1-38.3zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6c-1-21.7 11.8-39.3 28.5-39.3s31.2 16.6 32.1 38.3zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9 .8-6.2 3.9-6.5c18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1 .3 5.1 3.6 3.9 6.5z"
              />
            </svg>
          </svg>
        </a>
        <a
          href="https://mastodon.social/@Beavernotes"
          class="text-neutral-400 hover:text-[#6364FF]"
        >
          <span class="sr-only">Mastodon</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M433 179.1c0-97.2-63.7-125.7-63.7-125.7-62.5-28.7-228.6-28.4-290.5 0 0 0-63.7 28.5-63.7 125.7 0 115.7-6.6 259.4 105.6 289.1 40.5 10.7 75.3 13 103.3 11.4 50.8-2.8 79.3-18.1 79.3-18.1l-1.7-36.9s-36.3 11.4-77.1 10.1c-40.4-1.4-83-4.4-89.6-54a102.5 102.5 0 0 1 -.9-13.9c85.6 20.9 158.7 9.1 178.8 6.7 56.1-6.7 105-41.3 111.2-72.9 9.8-49.8 9-121.5 9-121.5zm-75.1 125.2h-46.6v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.3V197c0-58.5-64-56.6-64-6.9v114.2H90.2c0-122.1-5.2-147.9 18.4-175 25.9-28.9 79.8-30.8 103.8 6.1l11.6 19.5 11.6-19.5c24.1-37.1 78.1-34.8 103.8-6.1 23.7 27.3 18.4 53 18.4 175z"
              />
            </svg>
          </svg>
        </a>
        <a
          href="https://bsky.app/profile/beavernotes.com"
          class="text-neutral-400 hover:text-blue-500"
        >
          <span class="sr-only">Mastodon</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path
                d="M407.8 294.7c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3zM288 227.1C261.9 176.4 190.9 81.9 124.9 35.3C61.6-9.4 37.5-1.7 21.6 5.5C3.3 13.8 0 41.9 0 58.4S9.1 194 15 213.9c19.5 65.7 89.1 87.9 153.2 80.7c3.3-.5 6.6-.9 10-1.4c-3.3 .5-6.6 1-10 1.4C74.3 308.6-9.1 342.8 100.3 464.5C220.6 589.1 265.1 437.8 288 361.1c22.9 76.7 49.2 222.5 185.6 103.4c102.4-103.4 28.1-156-65.8-169.9c-3.3-.4-6.7-.8-10-1.3c3.4 .4 6.7 .9 10 1.3c64.1 7.1 133.6-15.1 153.2-80.7C566.9 194 576 75 576 58.4s-3.3-44.7-21.6-52.9c-15.8-7.1-40-14.9-103.2 29.8C385.1 81.9 314.1 176.4 288 227.1z"
              />
            </svg>
          </svg>
        </a>
      </div>
      <p class="mt-8 text-base leading-6 text-center text-neutral-400">
        © 2024 Beaver Notes. All rights reserved.
      </p>
    </div>
  </section>
</template>
