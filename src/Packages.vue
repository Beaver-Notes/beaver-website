<template>
  <div class="mx-auto">
    <div
      class="bg-white dark:bg-neutral-900 flex justify-center items-center h-full"
    >
      <div class="flex items-center h-screen">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
          <!-- Card 2 -->
          <button
            class="max-w-md bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-600 block post-card"
            @click="openDialog('dialog2')"
          >
            <div class="p-6">
              <p
                class="text-3xl text-center text-gray-900 font-bold dark:text-white"
                style="font-family: 'Arimo', sans-serif"
              >
                🍻 Homebrew
              </p>
            </div>
          </button>
          <Dialog :open="dialog2Visible" @close="closeDialog('dialog2')">
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              @click="closeDialog('dialog2')"
            ></div>
            <DialogPanel
              class="fixed inset-0 z-50 w-screen flex items-center justify-center"
            >
              <div
                class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-xl max-w-3xl text-left"
              >
                <div class="flex items-start">
                  <div
                    class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-700"
                  >
                    <svg
                      class="h-6 w-6 text-[#C91E42] dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M32 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32V96h51.2c42.4 0 76.8 34.4 76.8 76.8V274.9c0 30.4-17.9 57.9-45.6 70.2L384 381.7V416c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64zM384 311.6l56.4-25.1c4.6-2.1 7.6-6.6 7.6-11.7V172.8c0-7.1-5.7-12.8-12.8-12.8H384V311.6zM160 144c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144zm64 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V368c0 8.8 7.2 16 16 16s16-7.2 16-16V144z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 flex-1">
                    <DialogTitle
                      as="h2"
                      class="text-3xl font-semibold leading-6 pt-3 py-2 text-gray-900 dark:text-white"
                      >Homebrew</DialogTitle
                    >
                    <div class="mt-4">
                      <p class="text-base mb-4 text-gray-800 dark:text-white">
                        To install Beaver Notes on macOs through homebrew, run
                        the following command:
                      </p>
                      <pre
                        class="text-gray-700 dark:text-white bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                      brew install --cask beaver-notes
                      </pre>
                    </div>
                  </div>
                </div>
                <div class="mt-4 flex justify-end">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 mr-2"
                    @click="closeDialog('dialog2')"
                  >
                    Close
                  </button>
                </div>
              </div>
            </DialogPanel>
          </Dialog>

          <!-- Card 3 -->
          <button
            class="max-w-md bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-600 block post-card"
            @click="openDialog('dialog3')"
          >
            <div class="p-6">
              <p
                class="text-3xl text-center items-center text-gray-900 font-bold dark:text-white"
                style="font-family: 'Arimo', sans-serif"
              >
                🔩 AUR
              </p>
            </div>
          </button>
          <Dialog :open="dialog3Visible" @close="closeDialog('dialog3')">
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              @click="closeDialog('dialog3')"
            ></div>
            <DialogPanel
              class="fixed inset-0 z-50 w-screen flex items-center justify-center"
            >
              <div
                class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-xl max-w-3xl text-left"
              >
                <div class="flex items-start">
                  <div
                    class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-[#C91E42]"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#1893D1"
                        class="h-6 w-6"
                        d="M14.3,19.414c0.216-0.569,0.342-1.218,0.342-1.913c0-2.129-1.139-3.86-2.539-3.86c-1.412,0-2.55,1.731-2.55,3.86	c0,0.683,0.114,1.332,0.33,1.89c-4.657,0.49-7.936,2.437-9.268,3.313c2.243-3.234,4.589-7.025,6.831-11.386	c0.558-1.082,1.082-2.152,1.571-3.199C9.21,8.244,9.404,8.381,9.62,8.518c1.002,0.626,1.936,0.968,2.619,1.15	c-0.501-0.376-1.047-0.831-1.605-1.389c-0.421-0.421-0.797-0.843-1.116-1.253C10.463,4.954,11.283,2.961,12,1.071	c1.195,3.165,2.687,6.615,4.554,10.247c1.207,2.334,2.437,4.509,3.666,6.513c-0.353-0.193-0.74-0.376-1.15-0.535	c-0.706-0.273-1.366-0.444-1.936-0.546c0.774,0.387,1.674,0.9,2.619,1.583c0.615,0.456,1.161,0.911,1.628,1.355	c0.011,0.011,0.011,0.011,0.023,0.023c0.649,1.059,1.321,2.038,1.981,2.994C22.076,21.839,18.854,19.926,14.3,19.414z"
                      ></path>
                    </svg>
                  </div>
                  <div class="ml-4 flex-1">
                    <DialogTitle
                      as="h2"
                      class="text-3xl font-semibold leading-6 pt-3 py-2 text-gray-900 dark:text-white"
                      >AUR</DialogTitle
                    >
                    <div class="mt-4">
                      <p class="text-base mb-4 text-gray-800 dark:text-white">
                        To install Beaver Notes on Arch Linux through the AUR
                        using Yay, follow the commands below:
                      </p>
                      <p class="text-base mb-4 text-gray-800 dark:text-white">
                        Install Yay's dependencies:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                    sudo pacman -S base-devel git
                    </pre
                      >
                      <p class="text-base mb-4 text-gray-800 dark:text-white">
                        Clone Yay's repository and navigate to the directory:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                    git clone https://aur.archlinux.org/yay.git && cd yay
                    </pre
                      >
                      <p class="text-base mb-4 text-gray-800 dark:text-white">
                        Install Yay:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                    makepkg -si
                    </pre
                      >
                      <p class="text-base mb-4 text-gray-800">
                        Install Beaver Notes:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                    yay -S beaver-notes
                    </pre
                      >
                    </div>
                  </div>
                </div>
                <div class="mt-4 flex justify-end">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 mr-2"
                    @click="closeDialog('dialog3')"
                  >
                    Close
                  </button>
                </div>
              </div>
            </DialogPanel>
          </Dialog>

          <!-- Card 5 -->
          <a
            class="max-w-md bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-600 block post-card"
            href="https://flathub.org/apps/com.beavernotes.beavernotes"
          >
            <div class="p-6">
              <p
                class="text-3xl text-center text-gray-900 font-bold dark:text-white"
                style="font-family: 'Arimo', sans-serif"
              >
                📦 Flathub
              </p>
            </div>
          </a>

          <!-- Card 6 -->
          <button
            class="max-w-md bg-white dark:bg-neutral-800 rounded-xl border dark:border-neutral-600 block post-card"
            @click="openDialog('dialog6')"
          >
            <div class="p-6">
              <p
                class="text-3xl text-center text-gray-900 font-bold dark:text-white"
                style="font-family: 'Arimo', sans-serif"
              >
                🍦 Scoop
              </p>
            </div>
          </button>
          <Dialog :open="dialog6Visible" @close="closeDialog('dialog6')">
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              @click="closeDialog('dialog6')"
            ></div>
            <DialogPanel
              class="fixed inset-0 z-50 w-screen flex items-center justify-center"
            >
              <div
                class="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-xl max-w-3xl text-left"
              >
                <div class="flex items-start">
                  <div
                    class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-600"
                  >
                    <svg
                      class="h-6 w-6 dark:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16H80c-26.5 0-48 21.5-48 48s21.5 48 48 48h53.5 181H368c26.5 0 48-21.5 48-48s-21.5-48-48-48h-.9zM96 288L200.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288H96z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 flex-1">
                    <DialogTitle
                      as="h2"
                      class="text-3xl font-semibold leading-6 pt-3 py-2 text-gray-900 dark:text-white"
                      >Scoop</DialogTitle
                    >
                    <div class="mt-4">
                      <p class="text-base mb-4 text-gray-800 dark:text-white">
                        To install Beaver Notes on Windows using Scoop, follow
                        the commands below:
                      </p>
                      <p class="text-base mb-4 text-gray-800 dark:text-white">
                        Using PowerShell, run the following command to add the
                        repository extras:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                      scoop bucket add extras
                    </pre
                      >
                      <p class="text-base mb-4 text-gray-800">
                        To install Beaver Notes:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                      scoop install extras/beaver-notes
                    </pre
                      >
                    </div>
                  </div>
                </div>
                <div class="mt-4 flex justify-end">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 mr-2"
                    @click="closeDialog('dialog6')"
                  >
                    Close
                  </button>
                </div>
              </div>
            </DialogPanel>
          </Dialog>

          <!-- Repeat similar structure for additional cards -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/vue";

const dialog1Visible = ref(false);
const dialog2Visible = ref(false);
const dialog3Visible = ref(false);
const dialog4Visible = ref(false);
const dialog5Visible = ref(false);
const dialog6Visible = ref(false);
// Add more ref variables for additional dialogs if needed

const openDialog = (dialogId) => {
  if (dialogId === "dialog1") {
    dialog1Visible.value = true;
  } else if (dialogId === "dialog2") {
    dialog2Visible.value = true;
  } else if (dialogId === "dialog3") {
    dialog3Visible.value = true;
  } else if (dialogId === "dialog4") {
    dialog4Visible.value = true;
  } else if (dialogId === "dialog5") {
    dialog5Visible.value = true;
  } else if (dialogId === "dialog6") {
    dialog6Visible.value = true;
  }
  // Implement logic for more dialogs as needed
};

const closeDialog = (dialogId) => {
  if (dialogId === "dialog1") {
    dialog1Visible.value = false;
  } else if (dialogId === "dialog2") {
    dialog2Visible.value = false;
  } else if (dialogId === "dialog3") {
    dialog3Visible.value = false;
  } else if (dialogId === "dialog4") {
    dialog4Visible.value = false;
  } else if (dialogId === "dialog5") {
    dialog5Visible.value = false;
  } else if (dialogId === "dialog6") {
    dialog6Visible.value = false;
  }
  // Implement logic for more dialogs as needed
};
</script>

<style scoped>
/* Add scoped styles as needed */
</style>
