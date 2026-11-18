<script setup>
const releasesUrl = 'https://github.com/OkamiCoder/KazeOS/releases'
</script>

<template>
  <section id="download" class="py-12 md:py-16">
    <div class="mb-8">
      <p class="font-mono text-sm text-accent uppercase tracking-widest mb-2">
        // Загрузка
      </p>
      <h2 class="text-3xl md:text-4xl font-bold font-mono tracking-tight">
        Получить KazeOS
      </h2>
    </div>

    <div class="border-2 border-line bg-surface shadow-hard p-6 md:p-8">
      <p class="font-mono text-sm text-muted uppercase tracking-widest mb-6">
        // Статус: файлы ещё не опубликованы
      </p>

      <ul class="grid sm:grid-cols-2 gap-4 mb-8">
        <li>
          <div
            class="border border-line bg-background p-4 opacity-60 cursor-not-allowed"
            aria-disabled="true"
          >
            <p class="font-mono text-xs text-muted uppercase tracking-widest mb-1">
              ISO · x86_64
            </p>
            <p class="font-mono text-base mb-2">KazeOS (скоро)</p>
            <p class="text-xs text-muted">Пока не собран</p>
          </div>
        </li>
        <li>
          <div
            class="border border-line bg-background p-4 opacity-60 cursor-not-allowed"
            aria-disabled="true"
          >
            <p class="font-mono text-xs text-muted uppercase tracking-widest mb-1">
              Контрольные суммы
            </p>
            <p class="font-mono text-base mb-2">SHA256 (скоро)</p>
            <p class="text-xs text-muted">Появятся с первым релизом</p>
          </div>
        </li>
        <li>
          <div
            class="border border-line bg-background p-4 opacity-60 cursor-not-allowed"
            aria-disabled="true"
          >
            <p class="font-mono text-xs text-muted uppercase tracking-widest mb-1">
              Подпись
            </p>
            <p class="font-mono text-base mb-2">GPG (скоро)</p>
            <p class="text-xs text-muted">Будет опубликован вместе с ISO</p>
          </div>
        </li>
        <li>
          <a
            :href="releasesUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="block border border-line bg-background p-4 hover:border-accent hover:text-accent transition-colors"
          >
            <p class="font-mono text-xs text-muted uppercase tracking-widest mb-1">
              GitHub
            </p>
            <p class="font-mono text-base mb-2">Релизы →</p>
            <p class="text-xs text-muted">Следите за обновлениями</p>
          </a>
        </li>
      </ul>

      <p class="text-sm text-muted leading-relaxed">
        Первый публичный ISO ещё в работе. Следите за
        <a
          :href="releasesUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-accent hover:text-accent-hover underline underline-offset-2"
        >релизами в репозитории</a> —
        как только образ будет готов, ссылки появятся здесь.
      </p>
    </div>
  </section>
</template>