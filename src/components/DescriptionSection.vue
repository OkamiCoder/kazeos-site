<script setup>
const principles = [
  {
    label: 'Тонкость',
    text: 'Не форк Arch Linux, а слой автоматизации поверх него. Никакого лишнего — только то, что нужно для быстрого старта.'
  },
  {
    label: 'Контроль',
    text: 'Вы управляете системой, а не наоборот. WM вместо тяжёлого DE, прозрачная конфигурация, никакой магии.'
  },
  {
    label: 'Минимализм',
    text: 'Чистая база, предсказуемое поведение, лёгкая настройка. Всё лишнее — по желанию, а не по умолчанию.'
  }
]
</script>

<template>
  <section id="description" class="py-12 md:py-16">
    <div class="grid md:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-start">
      <div class="space-y-4">
        <p class="font-mono text-sm text-accent uppercase tracking-widest">
          // О дистрибутиве
        </p>
        <h2 class="text-3xl md:text-4xl font-bold font-mono tracking-tight">
          Arch Linux, собранный под контроль
        </h2>
        <p class="text-muted leading-relaxed">
          KazeOS — это не очередной форк. Это инструмент, который помогает
          развернуть рабочую среду на базе Arch Linux с минимальными усилиями
          и максимальным пониманием того, что происходит в системе.
        </p>
        <p class="text-muted leading-relaxed">
          Установщик Calamares, сборка через Archiso, оконный менеджер вместо
          тяжёлого рабочего окружения — и ничего сверху. Только база, автоматизация
          и вы.
        </p>
      </div>

      <ul class="space-y-3">
        <li
          v-for="(item, index) in principles"
          :key="item.label"
          class="border border-line bg-surface p-5 shadow-hard"
        >
          <div class="flex items-baseline gap-3 mb-2">
            <span class="font-mono text-xs text-accent tracking-widest">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <h3 class="font-mono text-base uppercase tracking-wider">
              {{ item.label }}
            </h3>
          </div>
          <p class="text-sm text-muted leading-relaxed">
            {{ item.text }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>