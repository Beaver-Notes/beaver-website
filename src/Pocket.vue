<template>
  <div class="overflow-hidden py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
      >
        <div class="lg:pr-8 sm:pt-24">
          <div class="lg:max-w-lg">
            <p
              class="text-3xl font-semibold text-neutral-800 dark:text-white lg:text-3xl"
              style="font-family: 'Arimo', sans-serif"
            >
              Your favourite note taking app, now
              <span class="text-amber-500"> on the go!</span>
            </p>
            <p
              class="text-lg text-neutral-600 dark:text-neutral-200 py-2 lg:text-xl"
              style="font-family: 'Arimo', sans-serif"
            >
              All the amazing features of Beaver Notes packed into the perfect
              note taking app for you on the go.
            </p>
            <div>
              <div
                v-if="!/android/i.test(userAgent)"
                class="flex flex-col space-y-3"
              >
                <!-- First button pair -->
                <div class="flex space-x-3">
                  <a
                    type="button"
                    href="https://github.com/Beaver-Notes/Beaver-pocket/releases"
                    class="flex items-center justify-center w-48 mt-3 text-white bg-black dark:bg-neutral-800 h-14 rounded-md"
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
                    class="flex items-center justify-center w-48 mt-3 text-black bg-transparent border border-black dark:border-white h-14 rounded-md"
                  >
                    <div class="mr-3">
                      <svg
                        width="30"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 52 52"
                        xml:space="preserve"
                        class="fill-black dark:fill-white"
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
                    <div class="dark:text-white">
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
                    class="flex items-center justify-center w-48 mt-3 text-white bg-black h-14 rounded-md"
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
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="32"
                        height="32"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1"
                          x1="18.102"
                          x2="25.297"
                          y1="3.244"
                          y2="34.74"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#35ab4a"></stop>
                          <stop offset=".297" stop-color="#31a145"></stop>
                          <stop offset=".798" stop-color="#288739"></stop>
                          <stop offset="1" stop-color="#237a33"></stop>
                        </linearGradient>
                        <path
                          fill="url(#AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1)"
                          d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"
                        ></path>
                        <linearGradient
                          id="AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2"
                          x1="19.158"
                          x2="21.194"
                          y1="23.862"
                          y2="66.931"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#f14e5d"></stop>
                          <stop offset=".499" stop-color="#ea3d4f"></stop>
                          <stop offset="1" stop-color="#e12138"></stop>
                        </linearGradient>
                        <path
                          fill="url(#AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2)"
                          d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"
                        ></path>
                        <linearGradient
                          id="AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3"
                          x1="32.943"
                          x2="36.541"
                          y1="14.899"
                          y2="43.612"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#ffd844"></stop>
                          <stop offset=".519" stop-color="#ffc63f"></stop>
                          <stop offset="1" stop-color="#ffb03a"></stop>
                        </linearGradient>
                        <path
                          fill="url(#AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3)"
                          d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"
                        ></path>
                        <linearGradient
                          id="AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4"
                          x1="13.853"
                          x2="15.572"
                          y1="5.901"
                          y2="42.811"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".003" stop-color="#0090e6"></stop>
                          <stop offset="1" stop-color="#0065a0"></stop>
                        </linearGradient>
                        <path
                          fill="url(#AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4)"
                          d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"
                        ></path>
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
              <div
                v-if="/android/i.test(userAgent)"
                class="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm"
              >
                <div v-if="statusMessage" class="mt-6 w-full max-w-sm mx-auto">
                  <p
                    class="text-sm text-center"
                    :class="
                      statusMessage.includes('successfully')
                        ? 'text-green-600 dark:text-green-400'
                        : 'text-red-600 dark:text-red-400'
                    "
                  >
                    {{ statusMessage }}
                  </p>
                </div>

                <!-- Only show form if no message OR not a success -->
                <div
                  v-else-if="isAndroid && showEmailPrompt"
                  class="mt-6 w-full max-w-sm mx-auto"
                >
                  <p
                    class="text-sm mb-6 text-center text-neutral-600 dark:text-neutral-300"
                  >
                    Enter your email to get early access to our closed beta on
                    the Play Store.
                  </p>
                  <div class="flex gap-2">
                    <input
                      v-model="email"
                      type="email"
                      placeholder="Your email"
                      class="flex-1 px-4 py-3 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-300 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                    <button
                      @click="submitEmail"
                      class="bg-amber-500 text-white px-4 py-3 rounded-lg transition"
                    >
                      Submit
                    </button>
                  </div>
                </div>
                <a
                  type="button"
                  href="https://github.com/Beaver-Notes/Beaver-pocket/releases"
                  class="hidden flex items-center justify-center w-48 mt-3 text-white bg-black dark:bg-neutral-800 h-14 rounded-md"
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
                  class="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14 hidden"
                  :href="androidLink"
                >
                  <div class="mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="32"
                      height="32"
                      viewBox="0 0 48 48"
                    >
                      <linearGradient
                        id="AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1"
                        x1="18.102"
                        x2="25.297"
                        y1="3.244"
                        y2="34.74"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#35ab4a"></stop>
                        <stop offset=".297" stop-color="#31a145"></stop>
                        <stop offset=".798" stop-color="#288739"></stop>
                        <stop offset="1" stop-color="#237a33"></stop>
                      </linearGradient>
                      <path
                        fill="url(#AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1)"
                        d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"
                      ></path>
                      <linearGradient
                        id="AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2"
                        x1="19.158"
                        x2="21.194"
                        y1="23.862"
                        y2="66.931"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#f14e5d"></stop>
                        <stop offset=".499" stop-color="#ea3d4f"></stop>
                        <stop offset="1" stop-color="#e12138"></stop>
                      </linearGradient>
                      <path
                        fill="url(#AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2)"
                        d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"
                      ></path>
                      <linearGradient
                        id="AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3"
                        x1="32.943"
                        x2="36.541"
                        y1="14.899"
                        y2="43.612"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0" stop-color="#ffd844"></stop>
                        <stop offset=".519" stop-color="#ffc63f"></stop>
                        <stop offset="1" stop-color="#ffb03a"></stop>
                      </linearGradient>
                      <path
                        fill="url(#AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3)"
                        d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"
                      ></path>
                      <linearGradient
                        id="AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4"
                        x1="13.853"
                        x2="15.572"
                        y1="5.901"
                        y2="42.811"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset=".003" stop-color="#0090e6"></stop>
                        <stop offset="1" stop-color="#0065a0"></stop>
                      </linearGradient>
                      <path
                        fill="url(#AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4)"
                        d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div class="text-xs">TEST IT ON</div>
                    <div class="-mt-1 font-sans text-xl font-semibold">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[64rem] rounded-2xl">
          <img
            src="/src/assets/pocket/devices.webp"
            alt="Product screenshot"
            class="w-[64rem] max-w-none rounded-xl ring-neutral-400/10 md:-ml-4 lg:-ml-0 dark:hidden"
            width="2432"
            height="1442"
          />
          <img
            src="/src/assets/pocket/devices-dark.webp"
            alt="Product screenshot"
            class="w-[64rem] max-w-none rounded-xl ring-neutral-400/10 md:-ml-4 lg:-ml-0 hidden dark:block"
            width="2432"
            height="1442"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import axios from "axios";

export default {
  setup() {
    // state
    const email = ref("");
    const statusMessage = ref("");
    const showEmailPrompt = ref(true);
    const userAgent =
      window.navigator.userAgent || window.navigator.vendor || window.opera;

    // computed
    const isAndroid = computed(() => /android/i.test(userAgent));

    // methods
    const submitEmail = async () => {
      if (!email.value) {
        statusMessage.value = "Please enter your email.";
        return;
      }

      try {
        const response = await axios.post("https://db.beavernotes.com/signup", {
          email: email.value,
        });

        if (response.data.success) {
          statusMessage.value = "Email sent successfully!";
          email.value = "";
          showEmailPrompt.value = false;
        } else {
          statusMessage.value = "Failed to send email. Try again later.";
        }
      } catch (error) {
        console.error(error);
        statusMessage.value = "An error occurred. Try again later.";
      }
    };

    return {
      email,
      statusMessage,
      showEmailPrompt,
      userAgent,
      isAndroid,
      submitEmail,
    };
  },
};
</script>
