import { ref, onMounted, onUnmounted, computed } from 'vue'

/**
 * 响应式断点组合式函数
 * Mobile: < 768px
 * Tablet: 768px - 1024px
 * Desktop: > 1024px
 */
export function useResponsive() {
  const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1024)

  const isMobile = computed(() => windowWidth.value < 768)
  const isTablet = computed(() => windowWidth.value >= 768 && windowWidth.value <= 1024)
  const isDesktop = computed(() => windowWidth.value > 1024)

  function handleResize() {
    windowWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop
  }
}
