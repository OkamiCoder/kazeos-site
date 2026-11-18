<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HeroSection from './components/HeroSection.vue'
import DescriptionSection from './components/DescriptionSection.vue'
import ScreenshotSlider from './components/ScreenshotSlider.vue'
import TechStackSection from './components/TechStackSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import GuideSection from './components/GuideSection.vue'
import NewsSection from './components/NewsSection.vue'
import PixelDivider from './components/PixelDivider.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-text flex flex-col">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-background focus:font-mono focus:text-sm focus:uppercase focus:tracking-wider"
    >
      Перейти к содержимому
    </a>

    <Navbar />

    <main
      id="main"
      tabindex="-1"
      class="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 focus:outline-none"
    >
      <HeroSection />

      <PixelDivider />
      <DescriptionSection v-reveal />

      <PixelDivider />
      <ScreenshotSlider v-reveal />

      <PixelDivider />
      <TechStackSection v-reveal />

      <PixelDivider />
      <DownloadSection v-reveal />

      <PixelDivider />
      <GuideSection v-reveal />

      <PixelDivider />
      <NewsSection v-reveal />
    </main>

    <Footer />
  </div>
</template>