<template>
    <header>
      <div class="container px-6 py-16 mx-auto">
        <div class="items-center lg:flex">
          <div class="w-full lg:w-1/2">
            <div class="lg:max-w-lg">
              <p
                class="text-3xl font-semibold text-gray-800 lg:text-3xl"
                style="font-family: 'Arimo', sans-serif"
              >
                Your favourite note-taking app,<span class="text-amber-500">
                  now on the go!</span
                >
              </p>
              <p
                class="text-lg text-gray-800 py-2 lg:text-xl"
                style="font-family: 'Arimo', sans-serif"
              >
                Beaver Notes Pocket takes all the amazing features introduced with
                Beaver Notes and packs them into the perfect note-taking app for
                you on the go.
              </p>
  
              <div>
                <div class="flex flex-col space-y-3">
                  <!-- First button pair -->
                  <div class="flex space-x-3">
                    <a
                      type="button"
                      href="https://github.com/Beaver-Notes/Beaver-pocket/releases"
                      class="flex items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-xl"
                    >
                      <div class="mr-3">
                        <svg
                          fill="#ffffff"
                          width="30"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs">GET IT ON</div>
                        <div class="-mt-1 font-sans text-xl font-semibold">
                          Github
                        </div>
                      </div>
                    </a>
  
                    <a
                      type="button"
                      href="https://testflight.apple.com/join/dSsmsGLY"
                      class="flex items-center justify-center w-48 mt-3 text-black bg-transparent border border-black h-14 rounded-xl"
                    >
                      <div class="mr-3">
                        <svg
                          fill="#000000"
                          width="30"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 52 52"
                          xml:space="preserve"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <g>
                              <path
                                d="M52,26C52,11.727,40.438,0.108,26.189,0.005C26.173,0.005,26.157,0,26.141,0h-0.281c-0.017,0-0.032,0.005-0.049,0.005 C11.561,0.108,0,11.727,0,26c0,4.635,1.225,8.987,3.36,12.76c0.02,0.038,0.031,0.079,0.053,0.117l0.141,0.245 c0.021,0.037,0.05,0.066,0.073,0.102C8.16,46.864,16.49,52,26,52c9.51,0,17.84-5.135,22.373-12.776 c0.023-0.037,0.053-0.066,0.075-0.104l0.139-0.242c0.021-0.037,0.032-0.077,0.052-0.114C50.774,34.99,52,30.637,52,26z M50,26 c0,3.095-0.595,6.051-1.667,8.77c-0.333-0.435-0.755-0.804-1.264-1.066h0l-16.131-8.317c-0.17-1.372-0.887-2.566-1.938-3.361 l0.863-18.123c0.027-0.576-0.084-1.128-0.298-1.636C41.114,3.994,50,13.978,50,26z M46.644,38.22 c-0.244,0.366-0.597,0.626-1.016,0.727c-0.457,0.111-0.933,0.028-1.341-0.234l-14.481-9.307l1.046-1.813l15.299,7.888c0,0,0,0,0,0 c0.434,0.224,0.746,0.595,0.878,1.043c0.12,0.41,0.071,0.845-0.126,1.243C46.819,37.919,46.733,38.071,46.644,38.22z M7.712,38.712 c-0.411,0.265-0.889,0.35-1.342,0.238c-0.417-0.1-0.771-0.363-1.016-0.732c-0.089-0.15-0.175-0.301-0.261-0.453 c-0.193-0.394-0.242-0.829-0.121-1.24c0.132-0.451,0.443-0.821,0.875-1.044l15.299-7.888l1.046,1.813L7.712,38.712z M23,26 c0-1.654,1.346-3,3-3s3,1.346,3,3s-1.346,3-3,3S23,27.654,23,26z M24.954,21L24.135,3.807c-0.023-0.488,0.142-0.943,0.465-1.282 c0.311-0.326,0.74-0.507,1.209-0.52C25.873,2.004,25.936,2,26,2c0.064,0,0.127,0.004,0.19,0.005 c0.467,0.013,0.895,0.194,1.208,0.523c0.324,0.34,0.49,0.794,0.467,1.279L27.046,21H24.954z M22.432,2.266 c-0.213,0.508-0.323,1.059-0.295,1.635c0,0.001,0,0.001,0,0.001L23,22.026c-1.051,0.796-1.768,1.99-1.938,3.361L4.931,33.704 c-0.51,0.263-0.931,0.632-1.263,1.069C2.596,32.053,2,29.096,2,26C2,13.979,10.885,3.995,22.432,2.266z M26,50 c-7.578,0-14.342-3.534-18.744-9.036c0.537-0.072,1.06-0.262,1.537-0.568v-0.001l15.246-9.797C24.642,30.855,25.304,31,26,31 s1.358-0.145,1.961-0.403l15.246,9.797c0.477,0.307,1,0.495,1.539,0.567C40.344,46.465,33.579,50,26,50z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs">Test on the</div>
                        <div class="-mt-1 font-sans text-2xl font-semibold">
                          TestFlight
                        </div>
                      </div>
                    </a>
                  </div>
  
                  <!-- Second button pair -->
                  <div class="hidden flex space-x-3">
                    <button
                      type="button"
                      class="flex items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-xl"
                    >
                      <div class="mr-3">
                        <svg
                          width="30"
                          fill="#ffffff"
                          viewBox="-52.01 0 560.035 560.035"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path
                              d="M380.844 297.529c.787 84.752 74.349 112.955 75.164 113.314-.622 1.988-11.754 40.191-38.756 79.652-23.343 34.117-47.568 68.107-85.731 68.811-37.499.691-49.557-22.236-92.429-22.236-42.859 0-56.256 21.533-91.753 22.928-36.837 1.395-64.889-36.891-88.424-70.883-48.093-69.53-84.846-196.475-35.496-282.165 24.516-42.554 68.328-69.501 115.882-70.192 36.173-.69 70.315 24.336 92.429 24.336 22.1 0 63.59-30.096 107.208-25.676 18.26.76 69.517 7.376 102.429 55.552-2.652 1.644-61.159 35.704-60.523 106.559M310.369 89.418C329.926 65.745 343.089 32.79 339.498 0 311.308 1.133 277.22 18.785 257 42.445c-18.121 20.952-33.991 54.487-29.709 86.628 31.421 2.431 63.52-15.967 83.078-39.655"
                            ></path>
                          </g>
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs">Download on the</div>
                        <div class="-mt-1 font-sans text-2xl font-semibold">
                          App Store
                        </div>
                      </div>
                    </button>
  
                    <button
                      type="button"
                      class="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14"
                    >
                      <div class="mr-3">
                        <svg
                          width="30"
                          version="1.1"
                          id="Icons"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 32 32"
                          xml:space="preserve"
                          fill="#000000"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                              .st0 {
                                fill: #ffffff;
                              }
                              .st1 {
                                fill: #3a559f;
                              }
                              .st2 {
                                fill: #f4f4f4;
                              }
                              .st3 {
                                fill: #ff0084;
                              }
                              .st4 {
                                fill: #0063db;
                              }
                              .st5 {
                                fill: #00aced;
                              }
                              .st6 {
                                fill: #ffec06;
                              }
                              .st7 {
                                fill: #ff0000;
                              }
                              .st8 {
                                fill: #25d366;
                              }
                              .st9 {
                                fill: #0088ff;
                              }
                              .st10 {
                                fill: #314358;
                              }
                              .st11 {
                                fill: #ee6996;
                              }
                              .st12 {
                                fill: #01aef3;
                              }
                              .st13 {
                                fill: #fffeff;
                              }
                              .st14 {
                                fill: #f06a35;
                              }
                              .st15 {
                                fill: #00adef;
                              }
                              .st16 {
                                fill: #1769ff;
                              }
                              .st17 {
                                fill: #1ab7ea;
                              }
                              .st18 {
                                fill: #6001d1;
                              }
                              .st19 {
                                fill: #e41214;
                              }
                              .st20 {
                                fill: #05ce78;
                              }
                              .st21 {
                                fill: #7b519c;
                              }
                              .st22 {
                                fill: #ff4500;
                              }
                              .st23 {
                                fill: #00f076;
                              }
                              .st24 {
                                fill: #ffc900;
                              }
                              .st25 {
                                fill: #00d6ff;
                              }
                              .st26 {
                                fill: #ff3a44;
                              }
                              .st27 {
                                fill: #ff6a36;
                              }
                              .st28 {
                                fill: #0061fe;
                              }
                              .st29 {
                                fill: #f7981c;
                              }
                              .st30 {
                                fill: #ee1b22;
                              }
                              .st31 {
                                fill: #ef3561;
                              }
                              .st32 {
                                fill: none;
                                stroke: #ffffff;
                                stroke-width: 2;
                                stroke-miterlimit: 10;
                              }
                              .st33 {
                                fill: #0097d3;
                              }
                              .st34 {
                                fill: #01308a;
                              }
                              .st35 {
                                fill: #019cde;
                              }
                              .st36 {
                                fill: #ffd049;
                              }
                              .st37 {
                                fill: #16a05d;
                              }
                              .st38 {
                                fill: #4486f4;
                              }
                              .st39 {
                                fill: none;
                              }
                              .st40 {
                                fill: #34a853;
                              }
                              .st41 {
                                fill: #4285f4;
                              }
                              .st42 {
                                fill: #fbbc05;
                              }
                              .st43 {
                                fill: #ea4335;
                              }
                            <g>
                              <path
                                class="st23"
                                d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z"
                              ></path>
                              <path
                                class="st24"
                                d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z"
                              ></path>
                              <path
                                class="st25"
                                d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z"
                              ></path>
                              <path
                                class="st26"
                                d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div>
                        <div class="text-xs">GET IT ON</div>
                        <div class="-mt-1 font-sans text-xl font-semibold">
                          Google Play
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div
            class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2"
          >
            <img
              class="w-[100%] h-full lg:max-w-[120%]"
              src="/src/assets/pocket/Pocket.webp"
            />
          </div>
        </div>
      </div>
    </header>
    <div class="overflow-hidden bg-white">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div class="lg:pr-8 lg:pt-4">
            <div class="lg:max-w-lg">
              <p
                class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                style="font-family: 'Arimo', sans-serif"
              >
                Empowering Note-Taking with Advanced Features:
              </p>
              <dl
                class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
              >
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    🔒 Privacy First:
                  </dt>
                  <dd class="inline" style="font-family: 'Arimo', sans-serif">
                    Beaver Pocket, much like Beaver Notes, has been built on the
                    <b>principle of privacy.</b> This means that your ideas,
                    notes, and thoughts are
                    <b>exclusively saved on your device</b>, giving you, the user,
                    full control over <b>your data.</b>.
                  </dd>
                </div>
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    🌳 Offline Access:
                  </dt>
                  <dd class="inline" style="font-family: 'Arimo', sans-serif">
                    With Pocket, the concept of taking notes on the go changes.
                    Now, you can have notes, lists, to-dos, projects, and much
                    more at the tips of your fingers wherever you are, whenever
                    you need, ensuring you're always productive no matter what.
                  </dd>
                </div>
                <div class="relative pl-9">
                  <dt class="inline font-semibold text-gray-900">
                    🤩 iPad users are going to love this:
                  </dt>
                  <dd class="inline" style="font-family: 'Arimo', sans-serif">
                    Beaver Notes not only features the same UI on the iPad as it
                    does on the desktop, but it also supports most of its Markdown
                    syntax and keyboard shortcuts. On top of being the best
                    note-taking companion, it's also a must-have for your iPad.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="/src/assets/pocket/iPadPro12.9.webp"
            alt="Product screenshot"
            class="w-[57rem] max-w-none rounded-xl sm:w-[68rem] md:-ml-4 lg:-ml-0"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  
    <div class="bg-white flex justify-center items-center h-auto px-6">
      <div class="grid hidden h-auto max-w-3xl">
        <p
          class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          style="font-family: 'Arimo', sans-serif"
        >
          Your Pathway to Excellence!
        </p>
        <p class="text-l text-gray-700 text-left py-8 text-gray-800">
          Capture ideas, manage projects, and ignite your creativity with Beaver
          Notes. From personal notes to powerful project management, our intuitive
          app empowers you to organize and explore your brilliance effortlessly.
          Unleash your potential with Beaver Notes and watch your ideas come to
          life!
        </p>
      </div>
    </div>
    <div
      class="hidden bg-white flex justify-center items-center min-h-auto py-12 px-6"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl">
        <!-- Card 1 -->
        <div class="p-4 max-h-[32em] border overflow-hidden rounded-xl">
          <p class="text-3xl font-bold mb-4 text-left text-gray-800">
            Navigate with Heading Tree
          </p>
          <p class="text-gray-700 text-left">
            Effortlessly explore your ideas with a heading tree. The menu pops up,
            and with a simple tap, you can smoothly navigate through your
            thoughts.
          </p>
          <img
            src="../resources/features/headings-tree.webp"
            alt="Feature 1"
            class="object-cover object-left"
          />
        </div>
  
        <!-- Card 2 -->
        <div class="p-4 border rounded-xl">
          <p class="text-3xl font-bold mb-4 text-left text-gray-800">
            Experience Focus Mode
          </p>
          <p class="text-gray-700 text-left mb-4">
            Stay immersed in your work, free from distractions, and streamline
            your note-taking process with ease.
          </p>
          <img
            src="../resources/features/focus.webp"
            alt="Feature 1"
            class="object-cover object-left"
          />
        </div>
      </div>
    </div>
    <div class="hidden bg-white flex justify-center items-center h-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
        <!-- Card 1 -->
        <div class="p-4 border rounded-xl flex flex-col items-center">
          <p class="text-3xl font-bold mb-4 text-gray-800 text-left">
            Share and Export as PDF
          </p>
          <p class="text-gray-700 text-left">
            Collaborate and Share Your Ideas with Ease. Export Your Notes as PDFs
            and Seamlessly Share with Colleagues, Friends, or Family. Embrace
            Seamless Collaboration and Boost Productivity. Experience the Power of
            Teamwork and Achieve More Together.
          </p>
        </div>
  
        <!-- Card 2 -->
        <div class="p-4 border rounded-xl flex flex-col items-center">
          <p class="text-3xl font-bold mb-4 text-gray-800 text-left">
            Export, Import, Simplify
          </p>
          <p class="text-gray-700 text-left">
            Harness the Power of Data Flexibility with Beaver Notes. Seamlessly
            Export or Import Your Notes and Media, Ensuring Full Access to Your
            Valuable Information. Simplify Data Management and Secure Your Notes
            Effortlessly. Empower Your Productivity Today.
          </p>
        </div>
  
        <!-- Card 3 -->
        <div class="p-4 border rounded-xl flex flex-col items-center">
          <p class="text-3xl font-bold mb-4 text-gray-800 text-left">
            Search and Navigate Effortlessly
          </p>
          <p class="text-gray-700 text-left">
            Stay organized and never lose track of your notes with the Headings
            Tree feature. Effortlessly navigate to the information you need. Keep
            your ideas structured and easily accessible.
          </p>
        </div>
  
        <!-- Card 4 -->
        <div class="p-4 border rounded-xl flex flex-col items-center">
          <p class="text-3xl font-bold mb-4 text-gray-800 text-left">
            Sync Across Devices
          </p>
          <p class="text-gray-700 text-left">
            Beaver Notes enables you to sync your notes easily. Just select a path
            from a trusted cloud provider, syncing service, or even your own home
            server. Then click the import and export buttons in the Sidebar
            whenever you need to sync your notes. Syncing your notes is as simple
            and private as that.
          </p>
        </div>
      </div>
    </div>
    <div class="hidden grid h-auto max-w-3xl mx-auto">
      <p
        class="mt-2 text-3xl font-bold tracking-tight text-center py-12 text-gray-900 sm:text-4xl"
        style="font-family: 'Arimo', sans-serif"
      >
        Ignite Your Brilliance and Unleash Productivity!
      </p>
      <div class="lg:max-w-lg mx-auto">
        <button
          onclick="window.location.href='../download.html'"
          class="w-full h-[45px] px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-amber-500 lg:w-auto hover:bg-amber-400 focus:outline-none focus:bg-amber-400 rounded-xl"
          style="font-family: 'Arimo', sans-serif"
        >
          Download Now
        </button>
      </div>
    </div>
    <div class="hidden grid py-8 h-auto max-w-3xl mx-auto">
      <a href="https://news.itsfoss.com/beaver-notes/?ref=itsfoss.com">
        <svg
          class="w-64 mx-auto fill-neutral-500 hover:fill-neutral-800"
          xmlns="http://www.w3.org/2000/svg"
          fill-rule="evenodd"
          clip-rule="evenodd"
          image-rendering="optimizeQuality"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
          viewBox="0 0 549 197"
        >
          <path
            d="M311.5 41.5a3 3 0 0 0 2 2c.2 5.7 0 11.4-1 17h-35v26c8.7-.2 17.3 0 26 .5.5.7 1.2 1.2 2 1.5v15c-9 2-18.4 2.6-28 2v44c-.7 0-1 .3-1 1-6 .3-11.8 0-17.5-1-.8-35.7-.7-71.3.5-107a693 693 0 0 1 52-1Zm57 1c1 1.2 2.3 1.8 4 2 2.3 1.7 4.3 3.7 6 6-.2 1.3.1 2.3 1 3 1.3 28.7 1.3 57.3 0 86-.8.3-1.2 1-1 2-.8.3-1.2 1-1 2-.7 0-1 .3-1 1-.7 0-1 .3-1 1-.7 0-1 .3-1 1-.7 0-1 .3-1 1-1-.2-1.7.2-2 1-1-.2-1.7.2-2 1-1.3-.2-2.3.1-3 1h-27c-1-1-2.4-1.3-4-1l-7-6a7 7 0 0 0-2-3c-1.1-28.3-1.3-56.6-.5-85 .6-1.7 1.1-3.3 1.5-5 2-2.7 4.3-5 7-7a102 102 0 0 1 34-1Zm-22 20h13a575 575 0 0 1-2 67.5c1 .5 2 .6 3 .5-5 1.3-10 1.3-15 0 1 .1 2 0 3-.5a575 575 0 0 1-2-67.5Z"
          />
          <path
            d="m200.5 42.5 8 5c.6 2 1.6 3.6 3 5 .9 8.3 1.2 16.6 1 25-6.2 1-12.6 1.3-19 1a777 777 0 0 0-2-16 8.9 8.9 0 0 0-6.5-2c-2.5-.2-4.7.5-6.5 2-.8.8-1.3 1.8-1.5 3-.7 6-.7 12 0 18 1.4.9 2.9 1.2 4.5 1 .7.9 1.7 1.2 3 1 .7.9 1.7 1.2 3 1 .7.9 1.7 1.2 3 1 .7.9 1.7 1.2 3 1 4.8 2.1 9.8 4 15 5.5a7 7 0 0 1 4 3.5c.3 14 0 28-1 42-.8.3-1.2 1-1 2-.8.3-1.2 1-1 2-.7 0-1 .3-1 1-.7 0-1 .3-1 1-.7 0-1 .3-1 1-.7 0-1 .3-1 1-1-.2-1.7.2-2 1-1-.2-1.7.2-2 1-1.3-.2-2.3.1-3 1-9 .2-18 0-27-.5l-7-2.5-6-7c-1-8.6-1.2-17.3-.5-26a43.9 43.9 0 0 1 18.5 0c-.2 4.3 0 8.7.5 13 .2 1.2.7 2.2 1.5 3 4.4 1.3 8.9 1.3 13.5 0 .8-7.2.7-14.2-.5-21-9.8-3.8-19.8-7.3-30-10.5a7 7 0 0 1-3.5-2.5c-.5-13.7-.7-27.3-.5-41 1.5-5 4.5-9 9-12 1.3.2 2.3-.1 3-1 10.3-1.3 20.7-1.3 31 0Z"
          />
          <path
            d="m435.5 42.5 8 5c.6 2 1.6 3.6 3 5 .9 8.3 1.2 16.6 1 25-6.2 1-12.6 1.3-19 1a401 401 0 0 0-2-16c-.3-.8-1-1.2-2-1-3-1.3-6-1.3-9 0-1-.2-1.7.2-2 1-.7.4-1.2 1-1.5 2a239 239 0 0 0-.5 18.5c1.4 1.3 3 1.8 5 1.5.7.9 1.7 1.2 3 1 .7.9 1.7 1.2 3 1 .7.9 1.7 1.2 3 1 5.8 2.4 11.8 4.6 18 6.5a7 7 0 0 1 4 3.5v39c-.9.7-1.2 1.7-1 3-.8.3-1.2 1-1 2-.8.3-1.2 1-1 2-.7 0-1 .3-1 1-.7 0-1 .3-1 1-.7 0-1 .3-1 1-.7 0-1 .3-1 1-1.7.2-3 .8-4 2-1.3-.2-2.3.1-3 1-9 .2-18 0-27-.5l-7-2.5a32.2 32.2 0 0 1-7-11c-.2-7.3 0-14.7.5-22 5.7-1 11.6-1.3 17.5-1a85 85 0 0 0 3 17c4.4 1.3 8.9 1.3 13.5 0 .8-7.2.7-14.2-.5-21-9.8-3.8-19.8-7.3-30-10.5a7 7 0 0 1-3.5-2.5c-.5-13.7-.7-27.3-.5-41 2-6.3 6-10.6 12-13 10.3-1.3 20.7-1.3 31 0Zm70 1c4.5 3 7.5 7 9 12 .2 7.3 0 14.7-.5 22a33.4 33.4 0 0 1-19.5-1c1-5 1-10 0-15h-3c-3-1.3-6-1.3-9 0-1-.2-1.7.2-2 1a57 57 0 0 0 0 21c.7.9 1.7 1.2 3 1 10.5 3.6 20.8 7.6 31 12 .3 14.7 0 29.4-1 44-.8.3-1.2 1-1 2-.7 0-1 .3-1 1a11 11 0 0 0-4 4c-.7 0-1 .3-1 1-2.3 0-4.3.8-6 2h-27c-5-1.5-9-4.5-12-9-2-8.9-2.5-17.9-1.5-27 5.7-1 11.6-1.3 17.5-1a3 3 0 0 0 2 2c-.2 5 0 10 .5 15 4.6 1.3 9.1 1.3 13.5 0 1.4-3.7 2-7.7 2-12-.4-3-.4-5.9 0-8.5-.6-.5-1.3-.6-2-.5-.7-.9-1.7-1.2-3-1a1659 1659 0 0 1-29.5-11c-1.5-13.6-2-27.2-1.5-41 1.5-4.8 4.1-8.8 8-12 1.7-.2 3-.8 4-2a102 102 0 0 1 34 1Z"
          />
          <path
            d="M34.5 41.5h16c.3.8.8 1.5 1.5 2 .5 35.3.7 70.7.5 106-.7 0-1 .3-1 1a44 44 0 0 1-18.5-2c-.5-35-.7-70-.5-105a3 3 0 0 0 2-2Zm29 0c17.7-.3 35.4 0 53 1v18c-6-.2-12 0-18 .5a1010 1010 0 0 1 0 89.5c-6.3.3-12.4 0-18.5-1a3961 3961 0 0 1-.5-89h-17c-1-5.6-1.2-11.3-1-17a3 3 0 0 0 2-2Zm65 0c5.9-.5 11.6.2 17 2v17c-.8.3-1.2 1-1 2-.7 0-1 .3-1 1-.8.3-1.2 1-1 2-.7 0-1 .3-1 1-.8.3-1.2 1-1 2-.7 0-1 .3-1 1-.8.3-1.2 1-1 2-.7 0-1 .3-1 1a12 12 0 0 1-10 1.5 7.4 7.4 0 0 1 0-4.5c1.5-1.7 2.5-3.7 3-6a10 10 0 0 0 2-2.5c-2-.3-3.8-.8-5.5-1.5-.7-5.3-.7-10.7 0-16 .7-.5 1.2-1.2 1.5-2Z"
          />
        </svg>
        <p
          class="mt-2 mx-32 text-lg tracking-tight text-center text-neutral-500 hover:text-neutral-800"
          style="font-family: 'Arimo', sans-serif"
        >
          “In my brief usage, Beaver Notes seems like a solid note-taking
          option... I suggest you try it, as it offers plenty of valuable
          features.”
        </p>
      </a>
    </div>
    <div class="bg-white flex justify-center items-center h-auto py-12 px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
        <!-- Card 1 -->
        <a
          href="https://www.reddit.com/r/BeaverNotes/"
          class="max-w-md bg-white rounded-xl border block post-card"
        >
          <div class="p-6">
            <p
              class="text-xl text-gray-900 font-bold mb-3"
              style="font-family: 'Arimo', sans-serif"
            >
              Join us on Reddit
            </p>
            <p class="text-gray-800" style="font-family: 'Arimo', sans-serif">
              Engage in discussions, get support, and stay updated with the latest
              Beaver Notes news. Connect with like-minded users and explore
              exciting ideas. Join now and be a part of the conversation!
            </p>
          </div>
        </a>
  
        <!-- Card 2 -->
        <a
          href="https://beaver-notes.github.io/Beaver-Docs/docs/category/user-guides"
          class="max-w-md bg-white rounded-xl border block post-card"
        >
          <div class="p-6">
            <p
              class="text-xl text-gray-900 font-bold mb-3"
              style="font-family: 'Arimo', sans-serif"
            >
              Explore Our Docs
            </p>
            <p class="text-gray-800" style="font-family: 'Arimo', sans-serif">
              Explore our comprehensive documentation to learn how to use Beaver
              Notes effectively as a user and developer. From installation guides
              to advanced features, you'll find everything you need to optimize
              your note-taking experience. Unlock the full potential of Beaver
              Notes now!
            </p>
          </div>
        </a>
  
        <!-- Card 3 -->
        <a
          href="https://mastodon.social/@Beavernotes"
          class="max-w-md bg-white rounded-xl border block post-card"
        >
          <div class="p-6">
            <p
              class="text-xl text-gray-900 font-bold mb-3"
              style="font-family: 'Arimo', sans-serif"
            >
              Join us on Mastodon
            </p>
            <p class="text-gray-800" style="font-family: 'Arimo', sans-serif">
              Connect with us on Mastodon, the decentralized social media
              platform. Engage in discussions, get support, and stay updated with
              the latest Beaver Notes news. Join like-minded users and explore
              exciting ideas. Don't miss out on being a part of the conversation!
            </p>
          </div>
        </a>
      </div>
    </div>
  </template>
  