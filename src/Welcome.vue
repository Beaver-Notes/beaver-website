<script>
import { RiChat3Line, RiRssLine, RiBookLine } from "vue-remix-icons";

export default {
  components: {
    RiChat3Line,
    RiRssLine,
    RiBookLine,
  },
  data() {
    return {
      context: null,
    };
  },
  mounted() {
    const raw = localStorage.getItem("beaver-download-context");
    this.context = raw ? JSON.parse(raw) : null;
  },
};
</script>

<template>
  <div class="min-h-screen max-w-5xl mx-auto pt-32 px-4">
    <div class="text-center">
      <p class="text-sm">Welcome to Beaver 👋</p>
      <p class="text-3xl font-bold">Your download has started!</p>

      <p class="text-neutral-600 dark:text-neutral-400">
        While Beaver is downloading, here are some great ways to get started
        with our community and resources.
      </p>
    </div>

    <div class="flex flex-col sm:flex-row mt-8 gap-6">
      <!-- Reddit -->
      <div class="flex-1">
        <div
          class="relative group w-full h-48 rounded-lg overflow-hidden shadow-lg mx-auto mt-8"
        >
          <a href="https://www.reddit.com/r/Beavernotes" target="_blank">
            <img
              src="@/assets/welcome/reddit.png"
              alt="Welcome to Beaver Notes Reddit Community"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-black p-2 text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Join our community on Reddit
            </div>
          </a>
        </div>
        <div class="w-full mt-4 text-center">
          <div class="flex items-center justify-center">
            <RiChat3Line class="text-orange-500 size-5" />
            <p class="ml-2 font-bold">Join our community on Reddit</p>
          </div>
          <p class="text-neutral-600 dark:text-neutral-200 mt-1">
            Connect with users and developers using Beaver. Get help, share
            tips, and stay updated on the latest features.
          </p>
        </div>
      </div>

      <!-- Blog -->
      <div class="flex-1">
        <div
          class="relative group w-full h-48 rounded-lg overflow-hidden shadow-lg mx-auto mt-8"
        >
          <a href="https://blog.beavernotes.com" target="_blank">
            <img
              src="@/assets/welcome/blog.png"
              alt="Welcome to Beaver Notes Blog"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-black p-2 text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Subscribe to our blog
            </div>
          </a>
        </div>
        <div class="w-full mt-4 text-center">
          <div class="flex items-center justify-center">
            <RiRssLine class="text-orange-500 size-5" />
            <p class="ml-2 font-bold">Subscribe to our blog</p>
          </div>
          <p class="text-neutral-600 dark:text-neutral-200 mt-1">
            Stay informed with the latest news, updates, and features of Beaver
            by following our official blog.
          </p>
        </div>
      </div>

      <!-- Docs -->
      <div class="flex-1">
        <div
          class="relative group w-full h-48 rounded-lg overflow-hidden shadow-lg mx-auto mt-8"
        >
          <a href="https://docs.beavernotes.com" target="_blank">
            <img
              src="@/assets/welcome/docs.png"
              alt="Welcome to Beaver Notes Documentation"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute bottom-0 left-0 w-full bg-white bg-opacity-90 text-black p-2 text-center font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Explore our documentation
            </div>
          </a>
        </div>
        <div class="w-full mt-4 text-center">
          <div class="flex items-center justify-center">
            <RiBookLine class="text-orange-500 size-5" />
            <p class="ml-2 font-bold">Explore our documentation</p>
          </div>
          <p class="text-neutral-600 dark:text-neutral-200 mt-1">
            Learn how to make the most of Beaver with our comprehensive
            documentation, including guides for users and contributors.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
