<template>
  <div class="mx-auto">
    <div class="bg-white flex justify-center items-center h-full">
      <div class="flex items-center h-screen">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
          <!-- Card 1 -->
          <button
            class="max-w-md bg-white rounded-xl border block post-card"
            @click="openDialog('dialog1')"
          >
            <div class="p-6">
              <p
                class="text-3xl text-center text-gray-900 font-bold"
                style="font-family: 'Arimo', sans-serif"
              >
                📦 Debian / Ubuntu
              </p>
            </div>
          </button>
          <Dialog :open="dialog1Visible" @close="closeDialog('dialog1')">
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              @click="closeDialog('dialog1')"
            ></div>
            <DialogPanel
              class="fixed inset-0 z-50 w-screen flex items-center justify-center"
            >
              <div
                class="bg-white p-6 rounded-lg shadow-xl max-w-3xl text-left"
              >
                <div class="flex items-start">
                  <div
                    class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100"
                  >
                    <svg
                      fill="#C91E42"
                      class="h-6 w-6 text-[#C91E42]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M380.2 245.6c3-7.6 5.5-14 5.2-24.4l-4.3 9c4.4-13.2 4-27.1 3.6-40.4c-.2-6-.3-11.8 0-17.4l-1.8-.5c-1.5-45.2-40.6-93.1-75.3-109.4c-30-13.8-76.1-16.2-97.3-5.8c1.3-1.1 4.2-2 6.8-2.7l.3-.1c3.3-1 6-1.7 4-2.9c-19.2 1.9-24.9 5.5-31.1 9.4l-.1 0c-4.6 2.9-9.5 6-20.3 8.7c-3.5 3.4 1.7 2 5.8 .9l0 0c4.1-1.1 7.2-1.9-.1 2.4c-3.5 1-6.6 1.3-9.6 1.6l-.1 0c-8.3 .8-15.8 1.6-30.7 17c.8 1.3 3.4-.2 5.3-1.3l.1-.1c2.3-1.4 3.4-2-1.7 4.4c-19.1-2.4-60.3 43.7-69.1 59l4.6 .8c-3.2 8-6.8 14.8-10 20.8c-4.3 8.1-7.9 14.9-8.7 21.3c-.3 5.1-1 11-1.7 17.3l0 0c-.1 1-.2 2-.3 3l-.1 .6c-3 27.3-6.7 60.8 3.9 73l-1.3 13c.6 1.2 1.1 2.3 1.6 3.5c.2 .4 .4 .8 .5 1.1l0 0 0 0 0 0 0 0 0 0 0 0 0 0c1 2.1 2 4.2 3.3 6.2l-3 .2c7 22.1 10.8 22.5 15.1 22.9l0 0c4.4 .4 9.3 .9 18.7 24.2c-2.7-.9-5.5-1.9-9.4-7.2c-.5 4.1 5.8 16.3 13.1 25.8l-3.1 3.6c2.1 3.7 4.8 6.2 7.6 8.8l0 0 0 0c1 .9 2.1 1.9 3.1 2.9c-11.9-6.5 3.2 13.7 11.9 25.2c.8 1.1 1.5 2 2.2 2.9l0 0 0 0 0 0 0 0 0 0c1.4 1.9 2.5 3.4 2.9 4.1l2.4-4.2c-.3 6.1 4.3 13.9 13.1 24.7l7.3-.3c3 6 14 16.7 20.7 17.2l-4.4 5.8c8.1 2.6 10.3 4.3 12.7 6.2c2.6 2.1 5.4 4.3 16.1 8.1l-4.2-7.4c3.5 3 6.2 5.9 8.8 8.7l.1 .1c5.2 5.6 9.9 10.6 19.7 15.3c10.7 3.7 16.6 4.7 22.7 5.8c.3 0 .6 .1 .9 .1c5.4 .8 11.2 1.8 20.8 4.5c-1.1-.1-2.2-.1-3.3-.1h0c-2.3-.1-4.7-.1-7-.1l0 0 0 0 0 0 0 0 0 0 0 0 0 0c-14.4-.2-29.2-.4-42.7-5.2C107.8 480.5 19.5 367.2 26 250.6c-.6-9.9-.3-20.9 0-30.7c.4-13.5 .7-24.8-1.6-28.3l1-3.1c5.3-17.4 11.7-38.2 23.8-62.8l-.1-.2v-.1c.4 .4 3.4 3.4 8.8-5.8c.8-1.8 1.6-3.7 2.4-5.6c.5-1.1 .9-2.2 1.4-3.2c2.5-6.1 5.1-12.3 8.4-17.9l2.6-.6c1.7-10.1 17-23.8 29.8-35.2l1.1-1c5.7-5.1 10.7-9.7 13.6-13.1l.7 4.4c17-15.9 44.6-27.5 65.6-36.4l.5-.2c4.8-2 9.3-3.9 13.3-5.7c-3.4 3.8 2.2 2.7 10 1c4.8-1 10.4-2.1 15.3-2.4l-3.9 2.1c-2.7 1.4-5.4 2.8-8 4.6c8.1-2 11.7-1.4 15.7-.8l.3 0c3.5 .6 7.3 1.2 14.6 .2c-5.6 .8-12.3 3-11.2 3.8c7.9 .9 12.8-.1 17.2-1l.2 0c5.5-1.1 10.3-2 19.3 .9l-1-4.8c7.3 2.6 12.7 4.3 17.5 5.8l.5 .1c10 3 17.6 5.3 34.2 14.1c3.2 .2 5.3-.5 7.4-1.2l.1 0c3.6-1.1 7-2.1 15.2 1.2c.3 .5 .5 1 .7 1.4c.1 .2 .2 .5 .3 .7l0 .1c1 2.6 1.8 4.6 14.6 12.1c1.7-.7-2.7-4.7-6.4-8.2c0 0 0 0-.1-.1c-.2-.1-.3-.3-.5-.4c32.2 17.3 67.3 54.1 78 93.5c-6-11.1-5.2-5.5-4.3 .5c.6 4 1.2 8.1-.2 7.5c4.5 12.1 8.1 24.5 10.4 37.4l-.8-2.9-.1-.3c-3.3-11.9-9.6-34.3-19.9-49.3c-.4 4.3-2.8 3.9-5.2 3.5l-.1 0 0 0c-3.3-.6-6.2-1.1-1.9 12.6c2.6 3.8 3.1 2.4 3.5 1.1l0 0c.5-1.5 .9-2.7 4.7 5.2c.1 4.1 1 8.2 2.1 12.7l0 0 0 0 .1 .6c.1 .3 .1 .5 .2 .8l.1 .6c.6 2.6 1.3 5.4 1.8 8.4c-1.1-.2-2.3-2.2-3.4-4.2c-1.4-2.4-2.8-4.7-3.7-3.2c2.4 11.5 6.5 17.4 8 18.3c-.3 .6-.6 .7-1.1 .7c-.8 0-1.8 .1-1.9 5.3c.7 13.7 3.3 12.5 5.3 11.6l0 0c.6-.3 1.2-.6 1.7-.4c-.6 2.5-1.6 5.1-2.7 7.9c-2.8 7.1-6 15.4-3.4 26.1c-.8-3-2-6-3.1-8.9l-.1-.4c-.2-.5-.4-1-.6-1.5l0 0c-.3-.8-.6-1.6-.9-2.3c-.6 4.4-.3 7.7-.1 10.6c0 .2 0 .5 0 .7c.4 5.3 .7 10-3 19.9c4.3-14.2 3.8-26.9-.2-20.8c1 10.9-3.7 20.4-8 28.9l-.1 .2c-3.6 7.1-6.8 13.5-5.9 19.3l-5.2-7.1c-7.5 10.9-7 13.3-6.5 15.5l0 .1c.5 1.9 1 3.8-3.4 10.8c1.7-2.9 1.3-3.6 1-4.2l0 0c-.4-.8-.7-1.5 1.7-5.1c-1.6 .1-5.5 3.9-10.1 8.5c-3.9 3.9-8.5 8.4-12.8 11.8c-37.5 30.1-82.3 34-125.6 17.8c.2-1-.2-2.1-3.1-4.1c-36.8-28.2-58.5-52.1-50.9-107.5c2.1-1.6 3.6-5.8 5.3-10.8l0 0 0 0 .2-.4 .1-.3 0-.1c2.9-8.4 6.5-18.8 14.3-23.8c7.8-17.3 31.3-33.3 56.4-33.7c25.6-1.4 47.2 13.7 58.1 27.9c-19.8-18.4-52.1-24-79.7-10.4c-28.2 12.7-45 43.8-42.5 74.7c.3-.4 .6-.6 .9-.8l0 0s0 0 0 0c0 0 .1-.1 .1-.1l.1-.1c.6-.5 1.1-.9 1.4-3.3c-.9 60.2 64.8 104.3 112.1 82l.6 1.3c12.7-3.5 15.9-6.5 20.3-10.7l.1-.1 0 0c2.2-2.1 4.7-4.5 8.9-7.3c-.3 .7-1.3 1.7-2.4 2.7c-2.2 2.1-4.6 4.5-1.6 4.6c5-1.3 18.5-13.4 28.5-22.3l0 0 0 0c.6-.5 1.2-1 1.7-1.5c1.5-1.3 2.8-2.5 4-3.6l0 0 .3-.3c1.9-4.2 1.6-5.6 1.3-7l0-.1c-.4-1.6-.8-3.3 2.4-9.6l7.3-3.7c.8-2.1 1.5-4.1 2.2-6c.2-.6 .5-1.2 .7-1.8l-.4-.2zM349.3 34.3l-.2-.1 .2 .1 0 0zM247.8 334.1c-6-3-13.7-8.9-14.8-11.4l-.4 .3c-.3 .6-.5 1.3-.2 2.2c-12.2-5.7-23.4-14.3-32.6-24.9c4.9 7.1 10.1 14.1 17 19.5c-6.9-2.3-15.1-11.8-21.6-19.3l-.1-.1c-4.3-5-7.9-9.1-9.7-9.5c19.8 35.5 80.5 62.3 112.3 49c-14.7 .5-33.4 .3-49.9-5.8zm79.3-119.7l-.1-.2c-.5-1.5-1.1-3.1-1.7-3.4c1.4-5.8 5.4-10.7 4.4 4.6c-1 3.8-1.8 1.5-2.6-1zm-4.2 22.2c-1.3 7.9-5 15.5-10.1 22.5c.2-2-1.2-2.4-2.6-2.8l0 0c-2.9-.8-5.9-1.6 5.6-16.1c-.5 1.9-2.1 4.6-3.7 7.3l0 0 0 0-.3 .4c-3.6 5.9-6.7 11 4 4.3l1-1.8c2.6-4.5 5-8.8 6-13.8h.1zm-55.6 33.9c7.1 .6 14.1 .6 21-1.1c-2.5 2.4-5.2 4.8-8.3 7.2c-11.1-1.7-21.2-6-12.7-6.1zm-92.6 11.6c3.6 7.1 6.4 11.5 9 15.7l.1 .2c2.3 3.7 4.4 7.1 6.8 11.7c-5.1-4.2-8.7-9.5-12.5-15l-.3-.5c-1.4-2.1-2.8-4.2-4.4-6.2l1.2-5.9h.1zm7.5-9.6c1.6 3.3 3.2 6.4 5.7 9.1l2.6 7.7-1.3-2.1c-3.2-5.3-6.3-10.6-8-16.7l.8 1.6 .2 .4zm238.9-41.6c-2.3 17.4-7.7 34.6-16 50.3c7.6-14.9 12.5-30.9 14.8-47.2l1.2-3.1zM35.6 110.6c.4 .8 1.4 .5 2.3 .3c1.9-.5 3.6-.9-.1 7.6c-.5 .3-1 .7-1.5 1l0 0 0 0c-1.4 .9-2.8 1.9-3.9 3c1.9-3.8 3.5-7.4 3.2-11.9zM25.3 152.3c-.7 3.7-1.5 7.9-3.4 13.9c.2-1.9 0-3.5-.2-4.9l0-.1c-.4-3.4-.7-6.3 4.3-12.8c-.3 1.2-.5 2.5-.7 3.8v.1z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 flex-1">
                    <DialogTitle
                      as="h2"
                      class="text-3xl font-semibold leading-6 pt-3 py-2 text-gray-900"
                      >Debian / Ubuntu Packages</DialogTitle
                    >
                    <div class="mt-4">
                      <p class="text-base mb-4 text-gray-800">
                        To install Beaver Notes through apt, first uninstall any
                        previous version of Beaver Notes. Don’t worry,
                        uninstalling won’t delete your notes. Feel free to back
                        them up by exporting them if you want an extra safety
                        net. After that, run the commands below.
                      </p>
                      <p class="text-base mb-4 text-gray-800">
                        Fetching Repository GPG Key:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
curl -s --compressed https://daniele-rolli.github.io/Beaver-notes-ppa/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/Beaver-notes-ppa.gpg >/dev/null</pre
                      >
                      <p class="text-base mb-4 text-gray-800">
                        Adding Beaver Notes Repository Source:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
sudo curl -s --compressed -o /etc/apt/sources.list.d/Beaver_notes_file.list https://daniele-rolli.github.io/Beaver-notes-ppa/Beaver_notes_file.list</pre
                      >
                      <p class="text-base mb-4 text-gray-800">
                        Updating Package Lists:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
sudo apt update</pre
                      >
                      <p class="text-base mb-4 text-gray-800">
                        Installing Beaver Notes:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
sudo apt install beaver-notes</pre
                      >
                    </div>
                  </div>
                </div>
                <div class="mt-4 flex justify-end">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 mr-2"
                    @click="closeDialog('dialog1')"
                  >
                    Close
                  </button>
                </div>
              </div>
            </DialogPanel>
          </Dialog>

          <!-- Card 2 -->
          <button
            class="max-w-md bg-white rounded-xl border block post-card"
            @click="openDialog('dialog2')"
          >
            <div class="p-6">
              <p
                class="text-3xl text-center text-gray-900 font-bold"
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
                class="bg-white p-6 rounded-lg shadow-xl max-w-3xl text-left"
              >
                <div class="flex items-start">
                  <div
                    class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100"
                  >
                    <svg
                      class="h-6 w-6 text-[#C91E42]"
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
                      class="text-3xl font-semibold leading-6 pt-3 py-2 text-gray-900"
                      >Homebrew</DialogTitle
                    >
                    <div class="mt-4">
                      <p class="text-base mb-4 text-gray-800">
                        To install Beaver Notes on macOs through homebrew, run
                        the following command:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
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
            class="max-w-md bg-white rounded-xl border block post-card"
            @click="openDialog('dialog3')"
          >
            <div class="p-6">
              <p
                class="text-3xl text-center items-center text-gray-900 font-bold"
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
                class="bg-white p-6 rounded-lg shadow-xl max-w-3xl text-left"
              >
                <div class="flex items-start">
                  <div
                    class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100"
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
                      class="text-3xl font-semibold leading-6 pt-3 py-2 text-gray-900"
                      >AUR</DialogTitle
                    >
                    <div class="mt-4">
                      <p class="text-base mb-4 text-gray-800">
                        To install Beaver Notes on Arch Linux through the AUR
                        using Yay, follow the commands below:
                      </p>
                      <p class="text-base mb-4 text-gray-800">
                        Install Yay's dependencies:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                    sudo pacman -S base-devel git
                    </pre
                      >
                      <p class="text-base mb-4 text-gray-800">
                        Clone Yay's repository and navigate to the directory:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                    git clone https://aur.archlinux.org/yay.git && cd yay
                    </pre
                      >
                      <p class="text-base mb-4 text-gray-800">Install Yay:</p>
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

          <!-- Card 4 -->
          <button
            class="max-w-md bg-white rounded-xl border block post-card"
            @click="openDialog('dialog4')"
          >
            <div class="p-6">
              <p
                class="text-3xl text-center text-gray-900 font-bold"
                style="font-family: 'Arimo', sans-serif"
              >
                🎩 Fedora / CentOS
              </p>
            </div>
          </button>
          <Dialog :open="dialog4Visible" @close="closeDialog('dialog4')">
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              @click="closeDialog('dialog4')"
            ></div>
            <DialogPanel
              class="fixed inset-0 z-50 w-screen flex items-center justify-center"
            >
              <div
                class="bg-white p-6 rounded-lg shadow-xl max-w-3xl text-left"
              >
                <div class="flex items-start">
                  <div
                    class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100"
                  >
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#51A2DA"
                        d="M0 255.8C.1 132.2 100.3 32 224 32C347.7 32 448 132.3 448 256C448 379.7 347.8 479.9 224.1 480H50.9C22.8 480 .1 457.3 0 429.2H0V255.8H0zM342.6 192.7C342.6 153 307 124.2 269.4 124.2C234.5 124.2 203.6 150.5 199.3 184.1C199.1 187.9 198.9 189.1 198.9 192.6C198.8 213.7 198.9 235.4 198.1 257C199 283.1 199.1 309.1 198.1 333.6C198.1 360.7 178.7 379.1 153.4 379.1C128.1 379.1 107.6 358.9 107.6 333.6C108.1 305.9 130.2 288.3 156.1 287.5H156.3L182.6 287.3V250L156.3 250.2C109.2 249.8 71.7 286.7 70.4 333.6C70.4 379.2 107.9 416.5 153.4 416.5C196.4 416.5 232.1 382.9 236 340.9L236.2 287.4L268.8 287.1C294.1 287.3 293.8 249.3 268.6 249.8L236.2 250.1C236.2 243.7 236.3 237.3 236.3 230.9C236.4 218.2 236.4 205.5 236.2 192.7C236.3 176.2 252 161.5 269.4 161.5C286.9 161.5 305.3 170.2 305.3 192.7C305.3 195.9 305.2 197.8 305 199C303.1 209.5 310.2 219.4 320.7 220.9C331.3 222.4 340.9 214.8 341.9 204.3C342.5 200.1 342.6 196.4 342.6 192.7H342.6z"
                      />
                    </svg>
                  </div>
                  <div class="ml-4 flex-1">
                    <DialogTitle
                      as="h2"
                      class="text-3xl font-semibold leading-6 pt-3 py-2 text-gray-900"
                      >Fedora / CentOS
                    </DialogTitle>
                    <div class="mt-4">
                      <p class="text-base mb-4 text-gray-800">
                        To install Beaver Notes on Fedora Linux using dnf or yum
                        follow the following step:
                      </p>
                      <p class="text-base mb-4 text-gray-800">
                        Create the repo file:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                    curl -o configure-repo.sh https://raw.githubusercontent.com/Daniele-rolli/Beaver-dnf/main/configure-repo.sh && chmod +x configure-repo.sh; sudo ./configure-repo.sh
                    </pre
                      >
                      <p class="text-base mb-4 text-gray-800">
                        Install Beaver Notes:
                      </p>
                      <pre
                        class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                        style="white-space: normal"
                      >
                    sudo dnf install Beaver-notes
                    </pre
                      >
                    </div>
                  </div>
                </div>
                <div class="mt-4 flex justify-end">
                  <button
                    type="button"
                    class="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 mr-2"
                    @click="closeDialog('dialog4')"
                  >
                    Close
                  </button>
                </div>
              </div>
            </DialogPanel>
          </Dialog>

          <!-- Card 5 -->
          <a
            class="max-w-md bg-white rounded-xl border block post-card"
            href="https://flathub.org/apps/com.beavernotes.beavernotes"
          >
            <div class="p-6">
              <p
                class="text-3xl text-center text-gray-900 font-bold"
                style="font-family: 'Arimo', sans-serif"
              >
                📦 Flathub
              </p>
            </div>
          </a>

          <!-- Card 6 -->
          <button
            class="max-w-md bg-white rounded-xl border block post-card"
            @click="openDialog('dialog6')"
          >
            <div class="p-6">
              <p
                class="text-3xl text-center text-gray-900 font-bold"
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
                class="bg-white p-6 rounded-lg shadow-xl max-w-3xl text-left"
              >
                <div class="flex items-start">
                  <div
                    class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100"
                  >
                    <svg
                      class="h-6 w-6"
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
                      class="text-3xl font-semibold leading-6 pt-3 py-2 text-gray-900"
                      >Scoop</DialogTitle
                    >
                    <div class="mt-4">
                      <p class="text-base mb-4 text-gray-800">
                        To install Beaver Notes on Windows using Scoop, follow
                        the commands below:
                      </p>
                      <p class="text-base mb-4 text-gray-800">
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
                    <div class="mt-4">
                      <details>
                        <summary>If the previous method did not wor</summary>
                        <p class="text-base mb-4 text-gray-800">
                          To install Beaver Notes on Windows using Scoop, follow
                          the commands below:
                        </p>
                        <p class="text-base mb-4 text-gray-800">
                          Using PowerShell, run the following command to add the
                          repository:
                        </p>
                        <pre
                          class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                          style="white-space: normal"
                        >
                    scoop bucket add Beaver-Bucket https://github.com/Daniele-rolli/Beaver-Bucket
                    </pre
                        >
                        <p class="text-base mb-4 text-gray-800">
                          To install Beaver Notes on x64:
                        </p>
                        <pre
                          class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                          style="white-space: normal"
                        >
                    scoop install Beaver-Notes
                    </pre
                        >
                        <p class="text-base mb-4 text-gray-800">
                          To install Beaver Notes on arm64:
                        </p>
                        <pre
                          class="text-gray-700 bg-black text-white p-4 rounded-xl mb-4 overflow-auto"
                          style="white-space: normal"
                        >
                    scoop install Beaver-Notes-arm
                    </pre
                        >
                      </details>
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
