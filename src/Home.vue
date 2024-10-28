<template>
  <div class="bg-white">
    <div class="relative isolate px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 hover:shadow-amber-400 hover:shadow-lg transition-shadow duration-300"
          >
            🎉 Check out the all new Beaver Pocket
            <a href="#/Pocket" class="font-semibold text-amber-500"
              ><span class="absolute inset-0" aria-hidden="true"></span>Read
              more <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Private Note Taking
          </h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            Beaver Notes is the open-source note taking app built for Privacy
            and Efficiency
          </p>
          <div class="mt-5 flex items-center justify-center gap-x-6">
            <a
              href="#/Download"
              class="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
              >Download now</a
            >
            <a
              href="#/Packages"
              class="text-sm font-semibold leading-6 text-gray-900"
              >Use a package manager <span aria-hidden="true">→</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center">
    <img src="/src/assets/home/app.webp" class="w-3/4" />
  </div>
  <div class="container pb-6 mx-auto px-4">
    <h3 class="text-xl text-amber-500 font-bold text-center">Testimonials</h3>
    <h1 class="text-4xl font-bold text-center mb-12">What People Think</h1>
    <div class="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <!-- It's Foss -->
      <a
        class="bg-white border p-6 rounded-lg shadow-lg flex items-center"
        href="https://news.itsfoss.com/beaver-notes/"
      >
        <img
          class="w-16 h-16 rounded-full mr-4"
          src="https://avatars.githubusercontent.com/u/26652955?s=200&v=4"
          alt="It's foss logo"
        />
        <div>
          <p class="text-gray-600 mb-2">
            “In my brief usage, Beaver Notes seems like a solid note-taking
            option... I suggest you try it, as it offers plenty of valuable
            features.”
          </p>
          <p class="font-bold">IT'S FOSS</p>
        </div>
      </a>
      <!-- Tromjaro -->
      <a
        class="bg-white p-6 border rounded-lg shadow-lg flex items-center"
        href="https://forum.tromjaro.com/t/tromjaro-2024-01-07-and-a-longish-article/207"
      >
        <img
          class="w-16 h-16 rounded-full mr-4"
          src="https://forum.tromjaro.com/user_avatar/forum.tromjaro.com/tio/240/359_2.png"
          alt="TROMJARO's developer avatar"
        />
        <div>
          <p class="text-gray-600 mb-2">
            "After tens and tens of notes taking apps that I’ve tested over the
            years, I think I found the perfect one. One that allows you to take
            notes in a simple manner, private, but modern looking and with
            markdown support. Welcome to Beaver Notes"
          </p>
          <p class="font-bold">TROMJARO's developer</p>
        </div>
      </a>
      <!-- GNULinux.ch -->
      <a
        class="bg-white p-6 border rounded-lg shadow-lg flex items-center"
        href="https://gnulinux.ch/serie-strukturierte-notizen-beaver-notes"
      >
        <img
          class="w-16 h-16 rounded-full mr-4"
          src="https://gnulinux.ch/bl-content/uploads/GNULinux.ch.svg"
          alt="GNU/Linux.ch"
        />
        <div>
          <p
            class="text-gray-600 mb-2"
            href="https://gnulinux.ch/serie-strukturierte-notizen-beaver-notes"
          >
            "I really liked the fact that markups are converted directly. If you
            can write Markdown fluently, you hardly need to reach for the mouse"
          </p>
          <p class="text-gray-500 mb-2">
            Translated from German using
            <strong href="https://www.deepl.com" class="text-amber-500"
              >Deepl</strong
            >
          </p>
          <p class="font-bold">GNU/Linux.ch</p>
        </div>
      </a>
    </div>
  </div>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
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
              class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Empowering Note-Taking
            </p>
            <dl
              class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
            >
              <div
                v-for="feature in features"
                :key="feature.name"
                class="relative pl-9"
              >
                <dt class="inline font-semibold text-gray-900">
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
        <img
          src="/src/assets/home/Biology project.png"
          alt="Product screenshot"
          class="w-[64rem] max-w-none rounded-xl ring-gray-400/10 md:-ml-4 lg:-ml-0"
          width="2432"
          height="1442"
        />
      </div>
    </div>
  </div>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
      Batteries Included
    </h1>
    <p class="mt-6 text-lg leading-8 text-gray-600">
      All the essential tools for taking, organizing, and sharing your notes,
      right out of the box.
    </p>
  </div>
  <div class="bg-white flex justify-center items-center min-h-auto py-12 px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-6xl">
      <!-- Card 1 -->
      <div class="p-4 border rounded-xl">
        <img
          src="/src/assets/home/linked-notes.png"
          alt="Feature 1"
          class="object-cover object-left"
        />
        <p class="text-3xl font-bold py-2 text-left text-gray-800">
          Note Linking
        </p>
        <p class="text-gray-700 text-left mb-4">
          Connect your notes and ideas, creating a web of interconnected
          thoughts.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="p-4 shadow border rounded-xl px-6">
        <img
          src="/src/assets/home/command prompt.png"
          alt="Feature 2"
          class="object-cover object-left"
        />
        <p class="text-3xl font-bold py-2 text-left text-gray-800">
          Command Prompt
        </p>
        <p class="text-gray-700 text-left mb-4">
          Search, manage notes and settings, and switch themes effortlessly.
          Elevate your productivity and simplify your workflow.
        </p>
      </div>
      <!-- Card 3 -->
      <div class="p-4 border rounded-xl">
        <img
          src="/src/assets/home/mermaid.png"
          alt="Feature 2"
          class="object-cover object-left"
        />
        <p class="text-3xl font-bold py-2 text-left text-gray-800">
          Mermaid Block
        </p>
        <p class="text-gray-700 text-left mb-4">
          Create diagrams, flowcharts and graphs using simple text syntax,
          enhancing your notes with clear visuals.
        </p>
      </div>

      <!-- Card 4 -->
      <div class="p-4 border rounded-xl">
        <img
          src="/src/assets/home/tags.png"
          alt="Feature 1"
          class="object-cover object-left"
        />
        <p class="text-3xl font-bold py-2 text-left text-gray-800">Tags</p>
        <p class="text-gray-700 text-left mb-4">
          Organize your notes with tags. Group your thoughts and ideas with
          quick searches.
        </p>
      </div>
      <!-- Card 5 -->
      <div class="p-4 border rounded-xl">
        <img
          src="/src/assets/home/callout.png"
          alt="Feature 1"
          class="object-cover object-left"
        />
        <p class="text-3xl font-bold py-2 text-left text-gray-800">Callouts</p>
        <p class="text-gray-700 text-left mb-4">
          Make your ideas stand out in a colorful and attention-grabbing way to
          highlight what's important from the rest of the note.
        </p>
      </div>

      <!-- Card 6 -->
      <div class="p-4 border rounded-xl">
        <img
          src="/src/assets/home/embed.png"
          alt="Feature 1"
          class="object-cover object-left"
        />
        <p class="text-3xl font-bold py-2 text-left text-gray-800">
          All in one place
        </p>
        <p class="text-gray-700 text-left mb-4">
          Link documents, presentations, spreadsheets, and more to your notes,
          ensuring your ideas are conveniently stored in one place.
        </p>
      </div>

      <!-- Card 7 -->
      <div class="p-4 border rounded-xl">
        <img
          src="/src/assets/home/Code Block.png"
          alt="Feature 2"
          class="object-cover object-left"
        />
        <p class="text-3xl font-bold py-2 text-left text-gray-800">
          Code Block
        </p>
        <p class="text-gray-700 text-left mb-4">
          Embed and format code snippets with syntax highlighting to keep your
          notes clear and organized.
        </p>
      </div>

      <!-- Card 8 -->
      <div class="p-4 border rounded-xl">
        <img
          src="/src/assets/home/math.png"
          alt="Feature 2"
          class="object-cover object-left"
        />
        <p class="text-3xl font-bold py-2 text-left text-gray-800">
          Math Block
        </p>
        <p class="text-gray-700 text-left mb-4">
          Enhance Your STEM Notes with Mathematical Equations, Expressions,
          Formulas, and More
        </p>
      </div>
    </div>
  </div>
  <div class="bg-white flex justify-center items-center h-auto px-6">
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

<script setup>
import {
  LockClosedIcon,
  PaperAirplaneIcon,
  PencilIcon,
} from "@heroicons/vue/20/solid";

const features = [
  {
    name: "Privacy First",
    description:
      "Your ideas, projects, and thoughts are exclusively saved on your personal computer, giving you, the user, full control over your data.",
    icon: LockClosedIcon,
  },
  {
    name: "Offline Access",
    description:
      "Take notes on the go, even without an internet connection. Access and edit your notes offline, ensuring you stay productive wherever you are.",
    icon: PaperAirplaneIcon,
  },
  {
    name: "Elevate Your Productivity",
    description:
      "Discover the power of versatile Markdown, enabling you to swiftly accomplish tasks seamlessly with just a keystroke.",
    icon: PencilIcon,
  },
];
</script>
