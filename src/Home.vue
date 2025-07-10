<template>
  <div class="relative isolate px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="mb-8 flex justify-center">
        <div
          class="text-xs sm:text-sm relative rounded-full px-3 py-1 text-sm leading-6 text-neutral-600 dark:text-neutral-200 ring-1 ring-neutral-900/10 dark:ring-neutral-300/10 dark:hover:ring-neutral-300/20 hover:ring-neutral-900/20 hover:shadow-amber-400 hover:shadow-lg transition-shadow duration-300"
        >
          🎉 Check out the all new Beaver Pocket
          <a href="#/Pocket" class="font-semibold text-amber-500"
            ><span class="absolute inset-0" aria-hidden="true"></span>Read more
            <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
      <div class="text-center">
        <h1
          class="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
        >
          Private Note Taking
        </h1>
        <p
          class="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-200"
        >
          Beaver Notes is the open-source note taking app built for Privacy and
          Efficiency
        </p>
        <div
          class="mt-5 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <div
            class="group flex justify-center items-center relative overflow-hidden"
          >
            <a
              href="#/Download"
              class="rounded-md bg-amber-400 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
              >Download now</a
            >
            <div
              class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"
            ></div>
          </div>

          <a
            href="#/Packages"
            class="text-md font-semibold leading-6 text-neutral-900 dark:text-white"
            >Use a package manager <span aria-hidden="true">→</span></a
          >
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex sm:justify-center sm:items-center space-x-4 overflow-hidden sm:overflow-visible mx-auto max-w-7xl px-6 lg:px-8"
  >
    <div
      class="w-[64rem] sm:w-full rounded-2xl p-1 bg-neutral-500/10 border-neutral-500/30 dark:bg-black/10 border dark:border-black/30 backdrop-blur-md shadow-lg"
    >
      <img
        src="/src/assets/home/space-light.png"
        class="w-[64rem] sm:w-full max-w-none rounded-xl ring-neutral-400/10 md:-ml-4 lg:-ml-0 dark:hidden"
      />
      <img
        src="/src/assets/home/space-dark.png"
        class="w-[64rem] sm:w-full max-w-none rounded-xl ring-neutral-400/10 md:-ml-4 lg:-ml-0 hidden dark:block"
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
            <h2 class="text-base font-semibold leading-7 text-amber-500">
              Better Note taking
            </h2>
            <p
              class="mt-2 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl"
            >
              Empowering Note Taking
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
                    class="absolute left-1 top-1 h-5 w-5 text-amber-500"
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
        <div
          class="w-[64rem] rounded-2xl p-1 bg-neutral-500/10 border-neutral-500/30 dark:bg-black/10 border dark:border-black/30 backdrop-blur-md shadow-lg"
        >
          <img
            src="/src/assets/home/app.png"
            alt="Product screenshot"
            class="w-[64rem] max-w-none rounded-xl ring-neutral-400/10 md:-ml-4 lg:-ml-0 dark:hidden"
            width="2432"
            height="1442"
          />
          <img
            src="/src/assets/home/app-dark.png"
            alt="Product screenshot"
            class="w-[64rem] max-w-none rounded-xl ring-neutral-400/10 md:-ml-4 lg:-ml-0 hidden dark:block"
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
      Batteries Included
    </h1>
    <p class="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-200">
      All the essential tools for taking, organizing, and sharing your notes,
      right out of the box.
    </p>
    <Bento />
  </div>

  <div class="text-center mt-64 mx-4">
    <h1
      class="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-6xl"
    >
      Capture Brilliance. Start Now.
    </h1>
    <div
      class="mt-5 flex flex-col sm:flex-row items-center justify-center gap-6"
    >
      <div
        class="group flex justify-center items-center relative overflow-hidden"
      >
        <a
          href="#/Download"
          class="rounded-md bg-amber-400 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
          >Download now</a
        >
        <div
          class="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"
        ></div>
      </div>

      <a
        href="#/Packages"
        class="text-md font-semibold leading-6 text-neutral-900 dark:text-white"
        >Use a package manager <span aria-hidden="true">→</span></a
      >
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 mt-20"
    >
      <a
        href="https://github.com/Beaver-Notes/Beaver-Notes"
        class="p-4 rounded-lg shadow border dark:border-neutral-600"
      >
        <p
          class="text-3xl font-bold py-2 text-left text-neutral-800 dark:text-white"
        >
          GitHub
        </p>
        <p class="text-neutral-700 dark:text-neutral-100 text-left mb-4">
          Ask questions, report issues, get help, propose new ideas, and check
          for updates on the roadmap.
        </p>
      </a>
      <a
        href="https://blog.beavernotes.com"
        class="p-4 rounded-lg shadow border dark:border-neutral-600"
      >
        <p
          class="text-3xl font-bold py-2 text-left text-neutral-800 dark:text-white"
        >
          Blog
        </p>
        <p class="text-neutral-700 dark:text-neutral-100 text-left mb-4">
          Find updates on new releases and the direction of the project.
          Subscribe to the RSS feed to stay up to date.
        </p>
      </a>
      <a
        href="https://docs.beavernotes.com"
        class="p-4 rounded-lg shadow border dark:border-neutral-600"
      >
        <p
          class="text-3xl font-bold py-2 text-left text-neutral-800 dark:text-white"
        >
          Docs
        </p>
        <p class="text-neutral-700 dark:text-neutral-100 text-left mb-4">
          Learn how to set up and use Beaver, and discover how you can
          contribute to its development.
        </p>
      </a>
    </div>
  </div>
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

export default {
  components: {
    Bento,
    Featured,
  },
  data() {
    return {
      features: [
        {
          name: "Offline First.",
          description:
            "Your ideas, projects, and thoughts are exclusively saved on your personal computer, giving you, the user, full control over your data.",
          icon: markRaw(RiSignalWifiOffLine), // mark as raw here
        },
        {
          name: "Keyboard Friendly.",
          description:
            "Blink and you’ve missed the convo? Format everything without ever leaving the keyboard with markdown and slash commands.",
          icon: markRaw(RiKeyboardLine),
        },
        {
          name: "Open to Everyone.",
          description:
            "Built for the community, by the community. From translations to code and idea contributions, everyone is welcome to help.",
          icon: markRaw(RiOpenSourceLine), // and here
        },
      ],
    };
  },
};
</script>
