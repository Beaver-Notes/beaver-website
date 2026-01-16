<script lang="jsx">
import {
  RiMicrosoftFill,
  RiAppleFill,
  RiArrowDownSLine,
  RiArrowRightUpLine,
} from "vue-remix-icons";
import axios from "axios";
import AppIcon1 from "@/assets/icons/AppIcon-1.webp";
import AppIcon2 from "@/assets/icons/AppIcon-2.webp";
import AppIcon3 from "@/assets/icons/AppIcon-3.webp";
import AppIcon4 from "@/assets/icons/AppIcon-4.webp";
import AppIcon5 from "@/assets/icons/AppIcon-5.webp";
import AppIcon6 from "@/assets/icons/AppIcon-6.webp";

const LinuxIcon = {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <path d="M316.9 187.3C317.9 187.8 318.7 189 319.9 189C321 189 322.7 188.6 322.8 187.5C323 186.1 320.9 185.2 319.6 184.6C317.9 183.9 315.7 183.6 314.1 184.5C313.7 184.7 313.3 185.2 313.5 185.6C313.8 186.9 315.8 186.7 316.9 187.3zM295 189C296.2 189 297 187.8 298 187.3C299.1 186.7 301.1 186.9 301.5 185.7C301.7 185.3 301.3 184.8 300.9 184.6C299.3 183.7 297.1 184 295.4 184.7C294.1 185.3 292 186.2 292.2 187.6C292.3 188.6 294 189.1 295 189zM516 467.8C512.4 463.8 510.7 456.2 508.8 448.1C507 440 504.9 431.3 498.3 425.7C497 424.6 495.7 423.6 494.3 422.8C493 422 491.6 421.3 490.2 420.8C499.4 393.5 495.8 366.3 486.5 341.7C475.1 311.6 455.2 285.3 440 267.3C422.9 245.8 406.3 225.4 406.6 195.3C407.1 149.4 411.7 64.1 330.8 64C228.4 63.8 254 167.4 252.9 199.2C251.2 222.6 246.5 241 230.4 263.9C211.5 286.4 184.9 322.7 172.3 360.6C166.3 378.5 163.5 396.7 166.1 413.9C159.6 419.7 154.7 428.6 149.5 434.1C145.3 438.4 139.2 440 132.5 442.4C125.8 444.8 118.5 448.4 114 456.9C111.9 460.8 111.2 465 111.2 469.3C111.2 473.2 111.8 477.2 112.4 481.1C113.6 489.2 114.9 496.8 113.2 501.9C108 516.3 107.3 526.3 111 533.6C114.8 540.9 122.4 544.1 131.1 545.9C148.4 549.5 171.9 548.6 190.4 558.4C210.2 568.8 230.3 572.5 246.3 568.8C257.9 566.2 267.4 559.2 272.2 548.6C284.7 548.5 298.5 543.2 320.5 542C335.4 540.8 354.1 547.3 375.6 546.1C376.2 548.4 377 550.7 378.1 552.8L378.1 552.9C386.4 569.6 401.9 577.2 418.4 575.9C435 574.6 452.5 564.9 466.7 548C480.3 531.6 502.7 524.8 517.6 515.8C525 511.3 531 505.7 531.5 497.5C531.9 489.3 527.1 480.2 516 467.8zM319.8 151.3C329.6 129.1 354 129.5 363.8 150.9C370.3 165.1 367.4 181.8 359.5 191.3C357.9 190.5 353.6 188.7 346.9 186.4C348 185.2 350 183.7 350.8 181.8C355.6 170 350.6 154.8 341.7 154.5C334.4 154 327.8 165.3 329.9 177.5C325.8 175.5 320.5 174 316.9 173.1C315.9 166.2 316.6 158.5 319.8 151.3zM279.1 139.8C289.2 139.8 299.9 154 298.2 173.3C294.7 174.3 291.1 175.8 288 177.9C289.2 169 284.7 157.8 278.4 158.3C270 159 268.6 179.5 276.6 186.4C277.6 187.2 278.5 186.2 270.7 191.9C255.1 177.3 260.2 139.8 279.1 139.8zM265.5 200.5C271.7 195.9 279.1 190.5 279.6 190C284.3 185.6 293.1 175.8 307.5 175.8C314.6 175.8 323.1 178.1 333.4 184.7C339.7 188.8 344.7 189.1 356 194C364.4 197.5 369.7 203.7 366.5 212.2C363.9 219.3 355.5 226.6 343.8 230.3C332.7 233.9 324 246.3 305.6 245.2C301.7 245 298.6 244.2 296 243.1C288 239.6 283.8 232.7 276 228.1C267.4 223.3 262.8 217.7 261.3 212.8C259.9 207.9 261.3 203.8 265.5 200.5zM268.8 534.5C266.1 569.6 224.9 568.9 193.5 552.5C163.6 536.7 124.9 546 117 530.6C114.6 525.9 114.6 517.9 119.6 504.2L119.6 504C122 496.4 120.2 488 119 480.1C117.8 472.3 117.2 465.1 119.9 460.1C123.4 453.4 128.4 451 134.7 448.8C145 445.1 146.5 445.4 154.3 438.9C159.8 433.2 163.8 426 168.6 420.9C173.7 415.4 178.6 412.8 186.3 414C194.4 415.2 201.4 420.8 208.2 430L227.8 465.6C237.3 485.5 270.9 514 268.8 534.5zM267.4 508.6C263.3 502 257.8 495 253 489C260.1 489 267.2 486.8 269.7 480.1C272 473.9 269.7 465.2 262.3 455.2C248.8 437 224 422.7 224 422.7C210.5 414.3 202.9 404 199.4 392.8C195.9 381.6 196.4 369.5 199.1 357.6C204.3 334.7 217.7 312.4 226.3 298.4C228.6 296.7 227.1 301.6 217.6 319.2C209.1 335.3 193.2 372.5 215 401.6C215.6 380.9 220.5 359.8 228.8 340.1C240.8 312.7 266.1 265.2 268.1 227.4C269.2 228.2 272.7 230.6 274.3 231.5C278.9 234.2 282.4 238.2 286.9 241.8C299.3 251.8 315.4 251 329.3 243C335.5 239.5 340.5 235.5 345.2 234C355.1 230.9 363 225.4 367.5 219C375.2 249.4 393.2 293.3 404.7 314.7C410.8 326.1 423 350.2 428.3 379.3C431.6 379.2 435.3 379.7 439.2 380.7C453 345 427.5 306.5 415.9 295.8C411.2 291.2 411 289.2 413.3 289.3C425.9 300.5 442.5 323 448.5 348.3C451.3 359.9 451.8 372 448.9 384C465.3 390.8 484.8 401.9 479.6 418.8C477.4 418.7 476.4 418.8 475.4 418.8C478.6 408.7 471.5 401.2 452.6 392.7C433 384.1 416.6 384.1 414.3 405.2C402.2 409.4 396 419.9 392.9 432.5C390.1 443.7 389.3 457.2 388.5 472.4C388 480.1 384.9 490.4 381.7 501.4C349.6 524.3 305 534.3 267.4 508.6zM524.8 497.1C523.9 513.9 483.6 517 461.6 543.6C448.4 559.3 432.2 568 418 569.1C403.8 570.2 391.5 564.3 384.3 549.8C379.6 538.7 381.9 526.7 385.4 513.5C389.1 499.3 394.6 484.7 395.3 472.9C396.1 457.7 397 444.4 399.5 434.2C402.1 423.9 406.1 417 413.2 413.1C413.5 412.9 413.9 412.8 414.2 412.6C415 425.8 421.5 439.2 433 442.1C445.6 445.4 463.7 434.6 471.4 425.8C480.4 425.5 487.1 424.9 494 430.9C503.9 439.4 501.1 461.2 511.1 472.5C521.7 484.1 525.1 492 524.8 497.1zM269.4 212.7C271.4 214.6 274.1 217.2 277.4 219.8C284 225 293.2 230.4 304.7 230.4C316.3 230.4 327.2 224.5 336.5 219.6C341.4 217 347.4 212.6 351.3 209.2C355.2 205.8 357.2 202.9 354.4 202.6C351.6 202.3 351.8 205.2 348.4 207.7C344 210.9 338.7 215.1 334.5 217.5C327.1 221.7 315 227.7 304.6 227.7C294.2 227.7 285.9 222.9 279.7 218C276.6 215.5 274 213 272 211.1C270.5 209.7 270.1 206.5 267.7 206.2C266.3 206.1 265.9 209.9 269.4 212.7z" />
      </svg>
    );
  },
};

export default {
  components: {
    LinuxIcon,
    RiMicrosoftFill,
    RiAppleFill,
    RiArrowDownSLine,
    RiArrowRightUpLine,
  },
  data() {
    return {
      version: "4.2.0",
      versionPocket: "1.6.0",
      images: [],
      currentImageIndex: 0,
      intervalId: null,
      // OS / Architecture selection
      detectedOS: null,
      selectedOS: null,
      osOptions: [
        { name: "Windows", icon: "RiMicrosoftFill" },
        { name: "macOS", icon: "RiAppleFill" },
        { name: "Linux", icon: "LinuxIcon" },
      ],
      archOptions: [],
      selectedArch: null,
      downloadLinks: {},
      showOSDropdown: false,
      showArchDropdown: false,
      // Mobile
      isMobile: false,
      mobileOS: null,
      images: [AppIcon1, AppIcon2, AppIcon3, AppIcon4, AppIcon5, AppIcon6],
      currentImageIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    this.detectOS();
    this.startImageRotation();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startImageRotation() {
      this.intervalId = setInterval(() => {
        this.currentImageIndex =
          (this.currentImageIndex + 1) % this.images.length;
      }, 2000);
    },

    copyCommand(text) {
      if (!text) return;
      navigator.clipboard.writeText(text);
    },

    detectOS() {
      const ua = navigator.userAgent || "";

      // Detect Desktop OS
      if (/windows phone/i.test(ua) || /windows|win32|win64/i.test(ua)) {
        this.detectedOS = "Windows";
        this.selectedOS = "Windows";
        this.setArchOptions();
      } else if (/android/i.test(ua)) {
        this.isMobile = true;
        this.mobileOS = "Android";
      } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
        this.isMobile = true;
        this.mobileOS = "iOS";
      } else if (/macintosh|mac os x/i.test(ua)) {
        this.detectedOS = "macOS";
        this.selectedOS = "macOS";
        this.setArchOptions();
      } else if (/linux/i.test(ua)) {
        this.detectedOS = "Linux";
        this.selectedOS = "Linux";
        this.setArchOptions();
      }

      // Default architecture selection
      this.selectedArch = this.archOptions[0] || null;

      // Set download links
      this.downloadLinks = {
        Windows: {
          "Universal Setup": `https://github.com/Beaver-Notes/Beaver-Notes/releases/download/${this.version}/Beaver.Notes-Setup-${this.version}.exe`,
          "Universal Portable": `https://github.com/Beaver-Notes/Beaver-Notes/releases/download/${this.version}/Beaver.Notes-${this.version}-portable.exe`,
        },
        macOS: {
          Universal: `https://github.com/Beaver-Notes/Beaver-Notes/releases/download/${this.version}/Beaver-notes-${this.version}-universal.dmg`,
        },
        Linux: {
          Flatpak: "https://flathub.org/en/apps/com.beavernotes.beavernotes",
          "Debian x64": `https://github.com/Beaver-Notes/Beaver-Notes/releases/download/${this.version}/Beaver-notes_${this.version}_amd64.deb`,
          "Debian ARM64": `https://github.com/Beaver-Notes/Beaver-Notes/releases/download/${this.version}/Beaver-notes_${this.version}_arm64.deb`,
          "RPM x64": `https://github.com/Beaver-Notes/Beaver-Notes/releases/download/${this.version}/Beaver-notes-${this.version}.x86_64.rpm`,
          "RPM ARM64": `https://github.com/Beaver-Notes/Beaver-Notes/releases/download/${this.version}/Beaver-notes-${this.version}.aarch64.rpm`,
          "AppImage x64": `https://github.com/Beaver-Notes/Beaver-Notes/releases/download/${this.version}/Beaver-notes-${this.version}.AppImage`,
          "AppImage ARM64": `https://github.com/Beaver-Notes/Beaver-Notes/releases/download/${this.version}/Beaver-notes-${this.version}-arm64.AppImage`,
        },
      };
    },

    setArchOptions() {
      switch (this.selectedOS) {
        case "Windows":
          this.archOptions = ["Universal Setup", "Universal Portable"];
          break;
        case "macOS":
          this.archOptions = ["Universal"];
          break;
        case "Linux":
          this.archOptions = [
            "Flatpak",
            "Debian x64",
            "Debian ARM64",
            "RPM x64",
            "RPM ARM64",
            "AppImage x64",
            "AppImage ARM64",
          ];
          break;
      }
      this.selectedArch = this.archOptions[0];
    },

    toggleOSDropdown() {
      this.showOSDropdown = !this.showOSDropdown;
    },

    toggleArchDropdown() {
      this.showArchDropdown = !this.showArchDropdown;
    },

    selectOS(os) {
      this.selectedOS = os;
      this.setArchOptions();
      this.showOSDropdown = false;
    },

    selectArch(arch) {
      this.selectedArch = arch;
      this.showArchDropdown = false;
    },

    downloadFile() {
      const link = this.downloadLinks[this.selectedOS][this.selectedArch];
      if (link) window.open(link, "_blank");
      this.$router.push("/welcome");
    },
  },
  computed: {
    cliCommand() {
      if (this.selectedOS === "Windows") {
        return "scoop install beaver-notes";
      }

      if (this.selectedOS === "macOS") {
        return "brew install beaver-notes";
      }

      if (this.selectedOS === "Linux") {
        if (this.selectedArch.includes("Flatpak")) {
          return "flatpak install flathub com.beavernotes.beavernotes";
        }
        if (this.selectedArch.includes("Debian")) {
          return `sudo dpkg -i Beaver-notes_${this.version}_${
            this.selectedArch.includes("ARM") ? "arm64" : "amd64"
          }.deb`;
        }
        if (this.selectedArch.includes("RPM")) {
          return `sudo rpm -i Beaver-notes-${this.version}.rpm`;
        }
        return `chmod +x Beaver-notes-${this.version}.AppImage && ./Beaver-notes-${this.version}.AppImage`;
      }

      return "";
    },
    selectedOSIcon() {
      console.log("Selected OS:", this.selectedOS);
      switch (this.selectedOS) {
        case "Windows":
          return "RiMicrosoftFill";
        case "macOS":
          return "RiAppleFill";
        case "Linux":
          return "LinuxIcon";
        default:
          return "RiMicrosoftFill";
      }
    },
  },
};
</script>

<template>
  <div class="min-h-screen mx-auto max-w-2xl pt-32 space-y-6 px-4 text-center">
    <!-- Logo -->
    <div class="w-48 h-48 mx-auto mb-4 relative">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        alt="Screenshot"
        class="absolute inset-0 w-full h-full object-cover object-top rounded-[42px] shadow-lg transition-opacity duration-700"
        :class="{
          'opacity-100 z-10': currentImageIndex === index,
          'opacity-0 z-0': currentImageIndex !== index,
        }"
      />
    </div>

    <!-- Version and Date -->
    <div
      class="flex justify-center items-center gap-2 text-neutral-600 dark:text-neutral-400"
    >
      <span class="font-semibold">{{ version }}</span>
      <span class="mx-2">|</span>
      <span>Dec 5, 2025</span>
    </div>

    <!-- Desktop Download (hide on mobile) -->
    <div v-if="!isMobile" class="mt-8 flex justify-center">
      <div class="relative w-full max-w-md">
        <!-- OS Selector top-left -->
        <div class="absolute top-0 left-0 flex items-center gap-1">
          <component :is="selectedOSIcon" class="w-4 h-4" />
          <button
            @click="toggleOSDropdown"
            class="flex items-center gap-1 px-2 py-1 rounded-md text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
          >
            {{ selectedOS }}
            <RiArrowDownSLine class="w-3 h-3" />
          </button>
          <ul
            v-if="showOSDropdown"
            class="absolute mt-6 w-32 bg-white dark:bg-neutral-800 border rounded-md shadow-lg z-50"
          >
            <li
              v-for="os in osOptions"
              :key="os.name"
              @click="selectOS(os.name)"
              class="px-2 py-1 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer flex items-center gap-1 text-sm"
            >
              <component :is="os.icon || 'RiTerminalLine'" class="w-4 h-4" />
              {{ os.name }}
            </li>
          </ul>
        </div>

        <!-- Architecture Selector top-right -->
        <div class="absolute top-0 right-0 flex items-center gap-1">
          <component
            v-if="selectedOS === 'Linux'"
            is="RiTerminalLine"
            class="w-4 h-4"
          />
          <button
            @click="toggleArchDropdown"
            class="flex items-center gap-1 px-2 py-1 rounded-md text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
          >
            {{ selectedArch }}
            <RiArrowDownSLine class="w-3 h-3" />
          </button>
          <ul
            v-if="showArchDropdown"
            class="absolute mt-6 right-0 w-32 bg-white dark:bg-neutral-800 rounded-md shadow-lg z-50 p-2"
          >
            <li
              v-for="arch in archOptions"
              :key="arch"
              @click="selectArch(arch)"
              class="text-start px-2 py-1 hover:bg-primary/20 cursor-pointer text-sm rounded-md"
            >
              {{ arch }}
            </li>
          </ul>
        </div>

        <!-- Download Button -->
        <button
          @click="downloadFile"
          class="w-full mt-10 px-6 py-2.5 bg-amber-400 text-white font-semibold rounded-lg shadow hover:bg-amber-400/90 transition"
        >
          Download Now
        </button>

        <!-- Package Manager / CLI -->
        <div
          class="mt-2 flex items-center gap-2 rounded-md bg-neutral-100 dark:bg-neutral-800 p-2 text-sm font-mono text-neutral-700 dark:text-neutral-300"
        >
          <!-- Scrollable command -->
          <div class="flex-1 overflow-x-auto whitespace-nowrap no-scrollbar">
            {{ cliCommand }}
          </div>

          <!-- Copy button -->
          <button
            @click="copyCommand(cliCommand)"
            class="shrink-0 px-2 py-1 rounded-md text-xs font-sans bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
            title="Copy command"
          >
            Copy
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Section -->
    <div v-if="isMobile" class="mt-8 space-y-4">
      <div v-if="mobileOS === 'iOS'">
        <a
          href="https://testflight.apple.com/join/dSsmsGLY"
          class="flex w-full justify-center items-center px-4 py-3 border rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
        >
          TestFlight
          <RiArrowRightUpLine class="ml-2 w-6 h-6" />
        </a>
      </div>
      <div v-else-if="mobileOS === 'Android'">
        <a
          href="https://play.google.com/store/apps/details?id=beaver.notes.pocket"
          class="flex w-full justify-center items-center px-4 py-3 border rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
        >
          Join the beta on the Play Store
          <RiArrowRightUpLine class="ml-2 w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</template>
