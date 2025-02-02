import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const content = binding.value || el.textContent || ''
    el.style.position = 'relative'

    const isOverflowing = el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight
    if (isOverflowing) {
      el.setAttribute('title', content)
    }
    else {
      el.removeAttribute('title')
    }
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const content = binding.value || el.textContent || ''
    el.style.position = 'relative'

    const isOverflowing = el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight
    if (isOverflowing) {
      el.setAttribute('title', content)
    }
    else {
      el.removeAttribute('title')
    }
  },
}
