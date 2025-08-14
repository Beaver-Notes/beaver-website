<script setup>
import { RiMenuLine, RiCloseLine } from "vue-remix-icons";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { ref } from "vue";

const mobileMenuOpen = ref(false);

const navigation = [
  { name: "Home", path: "/" },
  { name: "Download", path: "/Download" },
  { name: "Github", href: "https://github.com/Beaver-Notes/Beaver-Notes" },
  { name: "Docs", href: "https://docs.beavernotes.com" },
  { name: "Pocket", path: "/Pocket" },
  { name: "Blog", href: "https://blog.beavernotes.com" },
  { name: "☕️ Donate", href: "https://www.buymeacoffee.com/beavernotes" },
];
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav
      class="flex items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <router-link to="/" class="-m-1.5 p-1.5 flex items-center space-x-2">
          <span class="sr-only">Beaver Notes Logo</span>
          <img class="h-8 w-auto" src="/src/assets/logo.png" alt="" />
          <h1 class="text-lg font-bold">Beaver Notes</h1>
        </router-link>
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
        <template v-for="item in navigation" :key="item.name">
          <router-link
            v-if="item.path"
            :to="item.path"
            @click="mobileMenuOpen = false"
            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            {{ item.name }}
          </router-link>
          <a
            v-else
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            {{ item.name }}
          </a>
        </template>
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
          <router-link to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Beaver Notes</span>
            <img class="h-8 w-auto" src="/src/assets/logo.png" alt="" />
          </router-link>
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
              <template v-for="item in navigation" :key="item.name">
                <router-link
                  v-if="item.path"
                  :to="item.path"
                  @click="mobileMenuOpen = false"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  {{ item.name }}
                </router-link>
                <a
                  v-else
                  :href="item.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click="mobileMenuOpen = false"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  {{ item.name }}
                </a>
              </template>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>

  <router-view />

  <!-- Footer -->
  <section class="bg-white dark:bg-neutral-900 mb-0">
    <div
      class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8"
    >
      <nav class="flex flex-wrap justify-center -mx-5 -my-2">
        <div class="px-5 py-2">
          <router-link
            to="/Privacy"
            class="text-base leading-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200 dark:text-white"
          >
            Privacy Policy
          </router-link>
        </div>
        <div class="px-5 py-2">
          <a
            href="https://beaver-notes.github.io/Beaver-Blog/"
            class="text-base leading-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200 dark:text-white"
            target="_blank"
            rel="noopener"
          >
            Blog
          </a>
        </div>
        <div class="px-5 py-2">
          <router-link
            to="/Terms"
            class="text-base leading-6 text-neutral-500 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-200 dark:text-white"
          >
            Terms
          </router-link>
        </div>
      </nav>
      <!-- Social icons omitted for brevity -->
      <p class="mt-8 text-base leading-6 text-center text-neutral-400">
        © 2024 Beaver Notes. All rights reserved.
      </p>
    </div>
  </section>
</template>
