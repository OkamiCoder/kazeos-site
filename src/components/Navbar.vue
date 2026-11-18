<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const menuButton = ref(null)

const links = [
  { name: 'Руководство', href: '#guide' },
  { name: 'Новости', href: '#news' },
  { name: 'Репозиторий', href: 'https://github.com/OkamiCoder/KazeOS' },
  { name: 'Автор', href: 'https://github.com/OkamiCoder' }
]

const closeMenu = () => {
  isOpen.value = false
}

const handleEscape = (e) => {
  if (e.key === 'Escape' && isOpen.value) {
    isOpen.value = false
    menuButton.value?.focus()
  }
}

onMounted(() => document.addEventListener('keydown', handleEscape))
onUnmounted(() => document.removeEventListener('keydown', handleEscape))
</script>

<template>
  <header class="sticky top-0 z-50 bg-background border-b border-line">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <a href="#" class="flex items-center gap-3 group" aria-label="KazeOS — на главную">
          <div class="w-8 h-8 border-2 border-accent bg-surface flex items-center justify-center">
            <div class="w-3 h-3 bg-accent"></div>
          </div>
          <span class="font-mono text-lg font-semibold tracking-wider group-hover:text-accent transition-colors">
            KAZEOS
          </span>
        </a>

        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in links" :key="link.name">
            <a
              :href="link.href"
              class="font-mono text-sm uppercase tracking-wider text-muted hover:text-accent transition-colors duration-200"
              :target="link.href.startsWith('http') ? '_blank' : undefined"
              :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <button
          ref="menuButton"
          type="button"
          class="md:hidden p-2 text-muted hover:text-accent transition-colors"
          :aria-label="isOpen ? 'Закрыть меню' : 'Открыть меню'"
          :aria-expanded="isOpen"
          aria-controls="mobile-menu"
          @click="isOpen = !isOpen"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path v-if="!isOpen" stroke-linecap="square" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="square" d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
      </div>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ul
          v-if="isOpen"
          id="mobile-menu"
          class="md:hidden py-4 border-t border-line space-y-3"
        >
          <li v-for="link in links" :key="link.name">
            <a
              :href="link.href"
              class="block py-2 font-mono text-sm uppercase tracking-wider text-muted hover:text-accent transition-colors"
              :target="link.href.startsWith('http') ? '_blank' : undefined"
              :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
              @click="closeMenu"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>