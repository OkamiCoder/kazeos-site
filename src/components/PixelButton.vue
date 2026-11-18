<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary'].includes(v)
  },
  disabled: Boolean,
  href: String,
  external: Boolean
})
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="inline-flex items-center justify-center gap-2 px-4 py-2 font-mono text-sm uppercase tracking-wider border transition-all duration-200 shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] focus-visible:shadow-none active:translate-x-[4px] active:translate-y-[4px]"
    :class="{
      'bg-accent text-background border-accent hover:bg-accent-hover': variant === 'primary',
      'bg-surface text-text border-line hover:border-accent hover:text-accent': variant === 'secondary'
    }"
  >
    <slot />
  </a>

  <button
    v-else
    type="button"
    :disabled="disabled"
    class="inline-flex items-center justify-center gap-2 px-4 py-2 font-mono text-sm uppercase tracking-wider border transition-all duration-200 shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] focus-visible:shadow-none active:translate-x-[4px] active:translate-y-[4px] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:translate-x-0 disabled:translate-y-0"
    :class="{
      'bg-accent text-background border-accent hover:bg-accent-hover': variant === 'primary',
      'bg-surface text-text border-line hover:border-accent hover:text-accent': variant === 'secondary'
    }"
  >
    <slot />
  </button>
</template>