<template>
  <div class="mx-auto pt-16 sm:pt-24 lg:pt-28">
    <div class="bg-white flex justify-center items-center h-auto py-12 px-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl">
        <!-- Card 1 -->
        <button
          class="max-w-md bg-white rounded-xl border block post-card"
          onclick="openDialog('dialog1')"
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
        <dialog id="dialog1">
          <p>Details about Debian / Ubuntu</p>
          <button onclick="closeDialog('dialog1')">Close</button>
        </dialog>

        <!-- Card 2 -->
        <button
          class="max-w-md bg-white rounded-xl border block post-card"
          onclick="openDialog('dialog2')"
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
        <dialog id="dialog2">
          <p>Details about Homebrew</p>
          <button onclick="closeDialog('dialog2')">Close</button>
        </dialog>

        <!-- Card 3 -->
        <button
          class="max-w-md bg-white rounded-xl border block post-card"
          onclick="openDialog('dialog3')"
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
        <dialog id="dialog3">
          <p>Details about AUR</p>
          <button onclick="closeDialog('dialog3')">Close</button>
        </dialog>

        <!-- dnf -->
        <button
          class="max-w-md bg-white rounded-xl border block post-card"
          onclick="openDialog('dialog4')"
        >
          <div class="p-6">
            <p
              class="text-3xl text-center text-gray-900 font-bold"
              style="font-family: 'Arimo', sans-serif"
            >
              🎩 DNF
            </p>
          </div>
        </button>
        <dialog id="dialog4">
          <p>Details about DNF</p>
          <button onclick="closeDialog('dialog4')">Close</button>
        </dialog>

        <!-- flatpak -->
        <button
          class="max-w-md bg-white rounded-xl border block post-card"
          onclick="openDialog('dialog5')"
        >
          <div class="p-6">
            <p
              class="text-3xl text-center text-gray-900 font-bold"
              style="font-family: 'Arimo', sans-serif"
            >
              📦 Flathub
            </p>
          </div>
        </button>
        <dialog id="dialog5">
          <p>Details about Flathub</p>
          <button onclick="closeDialog('dialog5')">Close</button>
        </dialog>

        <!-- scoop -->
        <button
          class="max-w-md bg-white rounded-xl border block post-card"
          onclick="openDialog('dialog6')"
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
        <dialog id="dialog6">
          <p>Details about Scoop</p>
          <button onclick="closeDialog('dialog6')">Close</button>
        </dialog>
      </div>
    </div>
  </div>
</template>
<script>
function openDialog(id) {
  document.getElementById(id).showModal();
}

function closeDialog(id) {
  document.getElementById(id).close();
}
</script>
