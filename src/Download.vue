<script>
import { ArrowDownTrayIcon } from "@heroicons/vue/20/solid";

export default {
  components: {
    ArrowDownTrayIcon,
  },
  data() {
    return {
      showDropdown: false,
      isWindows: false,
      isLinux: false,
      isMac: false,
      buttonText: "Download Now",
    };
  },
  mounted() {
    this.detectOS();
  },
  methods: {
    detectOS() {
      const platform = window.navigator.platform;
      if (platform.startsWith("Win")) {
        this.isWindows = true;
        this.buttonText = "Download for Windows";
      } else if (platform.startsWith("Linux")) {
        this.isLinux = true;
        this.buttonText = "Download for Linux";
      } else if (platform.startsWith("Mac")) {
        this.isMac = true;
        this.buttonText = "Download for Mac";
      }
    },
  },
};
</script>

<template>
  <div class="mx-auto max-w-2xl pt-32 sm:pt-48 lg:pt-56">
    <div class="flex justify-center items-center text-center">
      <div class="p-2">
        <img
          src="/src/assets/logo.png"
          alt="Feature 1"
          class="w-80 h-80 object-cover object-top rounded-xl"
        />
        <p class="text-3xl font-bold mb-4 text-center text-gray-800 mt-4">
          Beaver Notes
        </p>
        <p class="text-l font-bold mb-4 text-center text-gray-600">
          Last updated July 29, 2024
        </p>
        <a
          class="text-l font-bold mb-4 text-center hover:text-amber-400 text-gray-600"
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/tag/3.5.0"
          >Check out the release notes</a
        >
      </div>
    </div>
  </div>

  <div
    class="flex flex-col sm:flex-row justify-center items-center text-center"
  >
    <button
      class="rounded-md bg-amber-500 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-amber-500 hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
      @click="showDropdown = !showDropdown"
    >
      {{ buttonText }}
    </button>
  </div>
  <div v-if="showDropdown" class="dropdown-menu z-100">
    <div v-if="isWindows">
      <div
        class="dropdown-content absolute bg-white rounded border shadow left-1/2 transform -translate-x-1/2"
      >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes.Setup.3.5.0.exe"
          class="block px-4 py-2 hover:bg-grey-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Intel (64-bit)</a
        >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes.Setup.3.5.0.arm64.exe"
          class="block px-4 py-2 hover:bg-grey-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Arm (64-bit)</a
        >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes.3.5.0.portable.exe"
          class="block px-4 py-2 hover:bg-grey-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Portable Intel (64-bit)</a
        >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes.3.5.0.portable.arm64.exe"
          class="block px-4 py-2 hover:bg-grey-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
        >
          Portabe Arm (64-bit)</a
        >
      </div>
    </div>
    <div v-else-if="isLinux">
      <div
        class="dropdown-content absolute bg-white mt-2 py-2 rounded border shadow left-1/2 transform -translate-x-1/2"
      >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes-3.5.0.AppImage"
          class="block px-4 py-2 hover:bg-gray-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Appimage x64</a
        >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes-3.5.0-arm64.AppImage"
          class="block px-4 py-2 hover:bg-gray-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Appimage Arm (64-bit)</a
        >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes_3.5.0_amd64.deb"
          class="block px-4 py-2 hover:bg-gray-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Deb x64</a
        >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes_3.5.0_arm64.deb"
          class="block px-4 py-2 hover:bg-gray-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Deb Arm (64-bit)</a
        >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes-3.5.0.x86_64.rpm"
          class="block px-4 py-2 hover:bg-gray-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Rpm x64</a
        >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes-3.5.0.aarch64.rpm"
          class="block px-4 py-2 hover:bg-gray-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Rpm Arm (64-bit)</a
        >
      </div>
    </div>
    <div v-else-if="isMac">
      <div
        class="dropdown-content absolute border bg-white mt-2 py-2 rounded left-1/2 transform -translate-x-1/2"
      >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes.dmg"
          class="block px-4 py-2 hover:bg-grey-100 text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Intel processor</a
        >
        <a
          href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes-arm64.dmg"
          class="block px-4 py-2 hover:bg-grey-100 focus:outline-none text-black hover:text-black"
          style="font-family: 'Arimo', sans-serif"
          >Apple Silicon</a
        >
      </div>
    </div>
  </div>

  <div class="py-10 sm:py-16 md:py-24">
    <div
      class="p-2 hidden lg:block md:block shadow-sm border-2 rounded-xl w-2/5 mx-auto"
    >
      <p class="text-2xl font-bold text-left text-neutral-800 px-2 py-2">
        Other Platforms
      </p>
      <div class="border-b-2 flex items-center justify-between">
        <p class="px-2 text-xl font-bold text-left text-gray-800 py-2">Mac</p>
        <div class="flex py-2 flex-col items-start pr-[4.2em]">
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes.dmg"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
          >
            <ArrowDownTrayIcon class="w-8 h-8 mr-2 mr-2" /> Intel processor
          </a>
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes-arm64.dmg"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
          >
            <ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Apple Silicon
          </a>
        </div>
      </div>
      <div class="border-b-2 flex items-center justify-between">
        <p class="px-2 text-xl font-bold text-left text-gray-800 py-2">
          Windows
        </p>
        <div class="py-2 flex flex-col items-start pr-[0.8em]">
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes.Setup.3.5.0.exe"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
          >
            <ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Intel (64-bit)
          </a>
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes.Setup.3.5.0.arm64.exe"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
          >
            <ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Arm (64-bit)
          </a>
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes.3.5.0.portable.exe"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
          >
            <ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Portable Intel (64-bit)
          </a>
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes.3.5.0.portable.arm64.exe"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
          >
            <ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Portable Arm (64-bit)
          </a>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <p class="px-2 text-xl font-bold text-left text-gray-800 py-2">Linux</p>
        <div class="flex py-2 flex-col items-start">
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes-3.5.0.AppImage"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
            ><ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Appimage x64</a
          >
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes-3.5.0-arm64.AppImage"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
            ><ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Appimage Arm (64-bit)</a
          >
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes_3.5.0_amd64.deb"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
            ><ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Deb x64</a
          >
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes_3.5.0_arm64.deb"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
            ><ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Deb Arm (64-bit)</a
          >
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes-3.5.0.x86_64.rpm"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
            ><ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Rpm x64</a
          >
          <a
            href="https://github.com/Beaver-Notes/Beaver-Notes/releases/download/3.5.0/Beaver-notes-3.5.0.aarch64.rpm"
            class="block text-lg px-4 py-2 hover:text-amber-400 text-amber-500 text-decoration-none flex items-center"
            style="font-family: 'Arimo', sans-serif"
            ><ArrowDownTrayIcon class="w-8 h-8 mr-2" /> Rpm Arm (64-bit)</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
