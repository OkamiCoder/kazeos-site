<script setup>
import { ref, computed } from 'vue'

const currentIndex = ref(0)

const screenshots = ref([
  { id: 1, src: null, alt: 'Рабочий стол KazeOS' },
  { id: 2, src: null, alt: 'Терминал KazeOS' },
  { id: 3, src: null, alt: 'Настройки KazeOS' }
])

const current = computed(() => screenshots.value[currentIndex.value])

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % screenshots.value.length
}

const prev = () => {
  currentIndex.value = currentIndex.value === 0
    ? screenshots.value.length - 1
    : currentIndex.value - 1
}

const goTo = (index) => {
  currentIndex.value = index
}
</script>

<template>
  <section class="py-12">
    <h2 class="font-mono text-2xl font-semibold mb-6 uppercase tracking-wider">
      Скриншоты
    </h2>

    <div
      class="relative border-2 border-line bg-surface shadow-hard"
      role="region"
      aria-roledescription="carousel"
      aria-label="Скриншоты KazeOS"
      tabindex="0"
      @keydown.left.prevent="prev"
      @keydown.right.prevent="next"
    >
      <div class="aspect-video bg-background flex items-center justify-center overflow-hidden">
        <div class="text-center space-y-3">
          <div class="w-24 h-24 mx-auto border-2 border-line bg-surface flex items-center justify-center">
            <span class="font-mono text-4xl text-muted">?</span>
          </div>
          <p class="font-mono text-sm text-muted">SCREENSHOT {{ current.id }} PLACEHOLDER</p>
        </div>
      </div>

      <p class="sr-only" aria-live="polite" aria-atomic="true">
        Слайд {{ currentIndex + 1 }} из {{ screenshots.length }}: {{ current.alt }}
      </p>

      <button
        type="button"
        @click="prev"
        class="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 border border-line bg-background/90 text-muted hover:text-accent hover:border-accent transition-colors font-mono"
        aria-label="Предыдущий скриншот"
      >
        &lt;
      </button>
      <button
        type="button"
        @click="next"
        class="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 border border-line bg-background/90 text-muted hover:text-accent hover:border-accent transition-colors font-mono"
        aria-label="Следующий скриншот"
      >
        &gt;
      </button>

      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          v-for="(shot, index) in screenshots"
          :key="shot.id"
          type="button"
          @click="goTo(index)"
          class="w-3 h-3 border border-line transition-colors"
          :class="index === currentIndex ? 'bg-accent border-accent' : 'bg-background hover:border-accent'"
          :aria-label="`Скриншот ${index + 1}`"
          :aria-current="index === currentIndex"
        ></button>
      </div>
    </div>
  </section>
</template>