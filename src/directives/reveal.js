// Единый IntersectionObserver на всё приложение — дешевле, чем по одному на элемент.
let observer = null

function getObserver() {
  if (observer) return observer

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      }
    },
    {
      // Срабатывает чуть раньше, чем элемент полностью войдёт — анимация начинается
      // до того, как пользователь упрётся в блок.
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    }
  )

  return observer
}

export const reveal = {
  mounted(el) {
    // Если пользователь просит уменьшить движение — показываем сразу, без анимации.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || typeof IntersectionObserver === 'undefined') {
      el.classList.add('reveal', 'is-visible')
      return
    }

    el.classList.add('reveal')
    getObserver().observe(el)
  },
  unmounted(el) {
    observer?.unobserve(el)
  }
}