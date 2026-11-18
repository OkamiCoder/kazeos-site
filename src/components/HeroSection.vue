<script setup>
import PixelButton from './PixelButton.vue'
import avatarUrl from '../assets/images/avatar.jpg'
</script>

<template>
  <section class="grid md:grid-cols-[1fr_auto] gap-8 items-center py-12 md:py-20">
    <div class="space-y-6">
      <p class="font-mono text-sm text-accent uppercase tracking-widest">
        // Linux Distribution
      </p>

      <h1
        class="text-5xl md:text-7xl font-bold tracking-tight"
        aria-label="KazeOS"
      >
        <span aria-hidden="true" class="text-accent">風</span>
        <span class="font-mono">KazeOS</span>
      </h1>

      <p class="text-lg md:text-xl text-muted max-w-xl leading-relaxed">
        Минималистичный дистрибутив на базе Arch Linux для тех, кто ценит чистоту системы
        и полный контроль. Без лишнего шума — только вы, ваше железо и необходимое ПО.
      </p>

      <div class="flex flex-wrap gap-4 pt-4">
        <PixelButton variant="primary" href="#download">
          Загрузить ISO
        </PixelButton>
        <PixelButton variant="secondary" href="https://github.com/OkamiCoder/KazeOS" external>
          Исходники
        </PixelButton>
      </div>
    </div>

    <aside class="justify-self-center md:justify-self-end">
      <div class="border-2 border-line bg-surface shadow-hard p-1">
        <div class="w-48 md:w-56 border border-line bg-background">
          <div class="aspect-[3/4] bg-surface flex items-center justify-center overflow-hidden">
            <img
              :src="avatarUrl"
              alt="OkamiCoder — автор KazeOS"
              class="w-full h-full object-cover pixelated"
            >
          </div>
          <div class="border-t border-line p-3 text-center bg-surface">
            <p class="font-mono text-sm text-text">OkamiCoder</p>
            <p class="font-mono text-xs text-muted mt-1">16yo (KazeOS developer)</p>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>