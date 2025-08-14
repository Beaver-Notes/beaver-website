<template>
  <div ref="container" class="sync-container">
    <svg
      class="w-full aspect-square max-w-[320px] mx-auto"
      viewBox="0 0 320 320"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fbbf24" />
          <stop offset="50%" stop-color="#fbbf24" />
          <stop offset="100%" stop-color="#fbbf24" />
        </linearGradient>
      </defs>

      <!-- Animated circle -->
      <circle
        cx="160"
        cy="160"
        r="100"
        stroke="#fbbf24"
        stroke-width="3"
        fill="none"
        stroke-dasharray="628"
        :stroke-dashoffset="circleOffset"
        class="circle-anim"
      />

      <!-- Circular inward arcs -->
      <path
        d="M160 60 A70 70 0 0 0 260 160"
        class="line delay-0"
        :class="{ show: animate }"
      />
      <path
        d="M260 160 A70 70 0 0 0 160 260"
        class="line delay-1"
        :class="{ show: animate }"
      />
      <path
        d="M160 260 A70 70 0 0 0 60 160"
        class="line delay-2"
        :class="{ show: animate }"
      />
      <path
        d="M60 160 A70 70 0 0 0 160 60"
        class="line delay-3"
        :class="{ show: animate }"
      />

      <!-- Nodes as SVG circles with text labels -->
      <g v-for="(node, i) in nodes" :key="i">
        <circle
          :cx="node.cx"
          :cy="node.cy"
          r="16"
          :class="[
            'stroke-gray-500',
            'stroke-2',
            'transition-transform duration-300',
            'cursor-default',
            'fill-neutral-500 dark:fill-neutral-800', // Tailwind for light/dark fill
          ]"
        />
        <text
          :x="node.cx"
          :y="node.cy + 5"
          fill="white"
          font-size="14"
          font-family="sans-serif"
          font-weight="600"
          text-anchor="middle"
          pointer-events="none"
        >
          {{ node.label }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const animate = ref(false);
const circleOffset = ref(628); // circumference 2πr = 2*3.1416*100 ≈ 628
const radius = 100;
const centerX = 160;
const centerY = 160;

const nodes = ["A", "B", "C", "D"].map((label, i) => {
  const angle = (i * 90 - 90) * (Math.PI / 180);
  return {
    label,
    cx: centerX + radius * Math.cos(angle),
    cy: centerY + radius * Math.sin(angle),
  };
});

const container = ref(null);
let animationInterval = null;
let observer = null;

function startAnimation() {
  animate.value = true;
  let dash = 628;
  circleOffset.value = dash;

  if (animationInterval) clearInterval(animationInterval);

  animationInterval = setInterval(() => {
    dash -= 15;
    if (dash <= 0) {
      dash = 0;
      clearInterval(animationInterval);
      animationInterval = null;
    }
    circleOffset.value = dash;
  }, 30);
}

function resetAnimation() {
  animate.value = false;
  circleOffset.value = 628;
  if (animationInterval) {
    clearInterval(animationInterval);
    animationInterval = null;
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // Start animation when element enters viewport
        startAnimation();
      } else {
        // Reset animation when element leaves viewport (allow replay)
        resetAnimation();
      }
    },
    {
      threshold: 0.5, // 50% visible to trigger
    }
  );
  if (container.value) {
    observer.observe(container.value);
  }
});

onBeforeUnmount(() => {
  if (observer && container.value) {
    observer.unobserve(container.value);
  }
  if (animationInterval) clearInterval(animationInterval);
});
</script>

<style scoped>
.sync-container {
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}

.line {
  stroke: url(#g);
  stroke-width: 3;
  fill: none;
  stroke-dasharray: 220;
  stroke-dashoffset: 220;
  transition: stroke-dashoffset 2.5s ease-in-out;
}

.line.show {
  stroke-dashoffset: 0;
}

.delay-0 {
  transition-delay: 0.4s;
}
.delay-1 {
  transition-delay: 0.8s;
}
.delay-2 {
  transition-delay: 1.2s;
}
.delay-3 {
  transition-delay: 1.6s;
}

.circle-anim {
  transition: stroke-dashoffset 2.5s ease-in-out;
}
</style>
