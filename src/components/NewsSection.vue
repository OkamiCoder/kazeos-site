<script setup>
const repoUrl = 'https://github.com/OkamiCoder/KazeOS'
</script>

<template>
  <section id="news" class="py-12 md:py-16">
    <div class="mb-8">
      <p class="font-mono text-sm text-accent uppercase tracking-widest mb-2">
        // Новости
      </p>
      <h2 class="text-3xl md:text-4xl font-bold font-mono tracking-tight">
        Что нового
      </h2>
    </div>

    <div class="border border-line bg-surface p-6 md:p-8 shadow-hard text-center">
      <div class="w-16 h-16 mx-auto mb-4 border-2 border-line bg-background flex items-center justify-center">
        <span class="font-mono text-2xl text-muted">···</span>
      </div>
      <p class="font-mono text-sm text-muted uppercase tracking-widest mb-2">
        // Пока тихо
      </p>
      <p class="text-muted leading-relaxed max-w-lg mx-auto mb-6">
        Новостей пока нет. Как только появится первый публичный релиз,
        здесь будут обновления — коротко и по делу.
      </p>
      <a
        :href="repoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-4 py-2 font-mono text-sm uppercase tracking-wider border border-line bg-background hover:border-accent hover:text-accent transition-colors"
      >
        Следить в GitHub →
      </a>
    </div>
  </section>
</template>