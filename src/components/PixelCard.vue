<script setup>
defineProps({
  hoverable: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <div
    class="bg-surface border border-line p-6 shadow-hard transition-all duration-200"
    :class="{
      'hover:border-accent hover:shadow-hard-accent': hoverable
    }"
  >
    <slot />
  </div>
</template>