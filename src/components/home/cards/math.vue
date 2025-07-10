// Math.vue
<template>
  <div
    contenteditable="true"
    class="prose prose-sm max-w-none outline-none text-neutral-800 dark:text-white font-sans text-left"
  >
    <h1 class="text-lg font-semibold mb-2">Schrödinger equation</h1>
    <p class="mb-2">
      To understand the quantum behavior of a particle in a potential, we begin
      with the time-dependent Schrödinger equation:
    <div ref="output" />
    </p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export default {
  setup() {
    const output = ref(null)

    const latexInput = String.raw`i\hbar \frac{\partial}{\partial t}\Psi(x, t) = \left[ -\frac{\hbar^2}{2m} \frac{\partial^2}{\partial x^2} + V(x, t) \right] \Psi(x, t)`

    onMounted(() => {
      katex.render(latexInput, output.value, {
        displayMode: true,
        throwOnError: false,
      })
    })

    return { output }
  }
}
</script>
