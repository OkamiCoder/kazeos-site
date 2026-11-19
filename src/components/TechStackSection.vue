<script setup>
import PixelCard from './PixelCard.vue'

const stack = [
  {
    name: 'Arch Linux',
    role: 'База',
    description: 'Фундамент дистрибутива — без форков и модификаций ядра.'
  },
  {
    name: 'Calamares',
    role: 'Установщик',
    description: 'Понятная установка вместо ручной разметки и chroot.'
  },
  {
    name: 'Archiso',
    role: 'Сборка ISO',
    description: 'Стандартный инструмент Arch для воспроизводимых образов.'
  },
  {
    name: 'AwesomeWM',
    role: 'WM по умолчанию',
    description: 'Тайловый менеджер окон, настраиваемый через Lua.'
  },
  {
    name: 'Hyprland · i3WM · Niri',
    role: 'Альтернативы',
    description: 'Выбор WM под ваш workflow — Wayland или X11.'
  },
  {
    name: 'Shell · Python',
    role: 'Автоматизация',
    description: 'Скрипты и конфигурация — прозрачные и читаемые.'
  }
]
</script>

<template>
  <section id="tech" class="py-12 md:py-16">
    <div class="mb-8">
      <p class="font-mono text-sm text-accent uppercase tracking-widest mb-2">
        // Технологии
      </p>
      <h2 class="text-3xl md:text-4xl font-bold font-mono tracking-tight">
        Из чего собран KazeOS
      </h2>
    </div>

    <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <li v-for="item in stack" :key="item.name">
        <PixelCard hoverable class="h-full">
          <div class="flex items-start gap-4">
            <div class="shrink-0 w-10 h-10 border border-line bg-background flex items-center justify-center text-accent">
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="miter"
                shape-rendering="crispEdges"
                aria-hidden="true"
              >
                <path v-if="item.role === 'База'" d="M12 3 L21 21 H3 Z" />
                <g v-else-if="item.role === 'Установщик'">
                  <rect x="3" y="15" width="18" height="6" />
                  <path d="M12 3 V15 M8 11 L12 15 L16 11" />
                </g>
                <g v-else-if="item.role === 'Сборка ISO'">
                  <path d="M3 7 L12 3 L21 7 L12 11 Z" />
                  <path d="M3 12 L12 16 L21 12" />
                  <path d="M3 17 L12 21 L21 17" />
                </g>
                <g v-else-if="item.role === 'WM по умолчанию'">
                  <rect x="3" y="3" width="8" height="8" />
                  <rect x="13" y="3" width="8" height="8" />
                  <rect x="3" y="13" width="8" height="8" />
                  <rect x="13" y="13" width="8" height="8" />
                </g>
                <g v-else-if="item.role === 'Альтернативы'">
                  <rect x="3" y="3" width="8" height="18" />
                  <rect x="13" y="3" width="8" height="8" />
                  <rect x="13" y="13" width="8" height="8" />
                </g>
                <g v-else>
                  <rect x="2" y="4" width="20" height="16" />
                  <path d="M6 9 L10 12 L6 15" />
                  <path d="M12 15 H18" />
                </g>
              </svg>
            </div>

            <div class="min-w-0">
              <p class="font-mono text-xs text-muted uppercase tracking-widest mb-1">
                {{ item.role }}
              </p>
              <h3 class="font-mono text-base font-semibold mb-2 leading-snug">
                {{ item.name }}
              </h3>
              <p class="text-sm text-muted leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </PixelCard>
      </li>
    </ul>
  </section>
</template>
