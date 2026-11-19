<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-line mt-auto">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div class="w-6 h-6 border-2 border-accent bg-surface flex items-center justify-center">
            <div class="w-2 h-2 bg-accent"></div>
          </div>
          <span class="font-mono text-sm text-muted">KAZEOS © {{ year }}</span>
        </div>

        <p class="font-mono text-xs text-muted uppercase tracking-wider">
          GPL 3.0 · <a href="https://github.com/OkamiCoder/KazeOS" class="hover:text-accent transition-colors">Исходники</a>
        </p>

        <div class="flex items-center gap-6">
          <a
            href="https://github.com/OkamiCoder"
            class="font-mono text-xs uppercase tracking-wider text-muted hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://github.com/OkamiCoder/KazeOS"
            class="font-mono text-xs uppercase tracking-wider text-muted hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Репозиторий
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
