<script setup>
const steps = [
  {
    n: '01',
    title: 'Скачать ISO',
    text: 'Когда образ будет опубликован — скачайте его со страницы релизов. Проверьте SHA256 и подпись.'
  },
  {
    n: '02',
    title: 'Записать на USB',
    text: 'Используйте dd, Rufus или balenaEtcher. Минимум 4 ГБ на флешке, данные на ней будут стёрты.'
  },
  {
    n: '03',
    title: 'Загрузиться с USB',
    text: 'В BIOS/UEFI выберите загрузку с флешки. Убедитесь, что отключён Secure Boot, если он мешает.'
  },
  {
    n: '04',
    title: 'Запустить Calamares',
    text: 'Следуйте шагам установщика: язык, диск, пользователь. После — перезагрузка и первый запуск.'
  }
]
</script>

<template>
  <section id="guide" class="py-12 md:py-16">
    <div class="mb-8">
      <p class="font-mono text-sm text-accent uppercase tracking-widest mb-2">
        // Руководство
      </p>
      <h2 class="text-3xl md:text-4xl font-bold font-mono tracking-tight">
        Как установить
      </h2>
      <p class="text-muted leading-relaxed mt-3 max-w-2xl">
        Стандартный путь для дистрибутивов на базе Arch с установщиком Calamares.
        Когда ISO будет готов — здесь появится расширенная документация.
      </p>
    </div>

    <ol class="grid sm:grid-cols-2 gap-4">
      <li
        v-for="step in steps"
        :key="step.n"
        class="border border-line bg-surface p-5 shadow-hard"
      >
        <p class="font-mono text-xs text-accent tracking-widest mb-2">
          ШАГ {{ step.n }}
        </p>
        <h3 class="font-mono text-base font-semibold mb-2">
          {{ step.title }}
        </h3>
        <p class="text-sm text-muted leading-relaxed">
          {{ step.text }}
        </p>
      </li>
    </ol>

    <p class="text-xs text-muted font-mono uppercase tracking-widest mt-6">
      // Расширенная документация — в разработке
    </p>
  </section>
</template>