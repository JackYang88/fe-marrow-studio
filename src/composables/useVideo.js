import { ref, onMounted, onUnmounted } from 'vue'

/**
 * 视频加载组合式函数
 * 用于处理视频预加载、自动播放和响应式控制
 */
export function useVideo(videoSrc, options = {}) {
  const videoRef = ref(null)
  const isLoaded = ref(false)
  const isPlaying = ref(false)
  const isLoading = ref(true)
  const hasError = ref(false)

  const {
    autoplay = false,
    muted = true,
    loop = true,
    playsInline = true,
    preload = 'auto'
  } = options

  function play() {
    if (videoRef.value) {
      videoRef.value.play()
        .then(() => { isPlaying.value = true })
        .catch(() => { hasError.value = true })
    }
  }

  function pause() {
    if (videoRef.value) {
      videoRef.value.pause()
      isPlaying.value = false
    }
  }

  function handleLoaded() {
    isLoaded.value = true
    isLoading.value = false
  }

  function handleError() {
    hasError.value = true
    isLoading.value = false
  }

  function setupVideo(el) {
    videoRef.value = el
    if (el) {
      el.autoplay = autoplay
      el.muted = muted
      el.loop = loop
      el.playsInline = playsInline
      el.preload = preload

      el.addEventListener('loadeddata', handleLoaded)
      el.addEventListener('error', handleError)
      el.addEventListener('play', () => { isPlaying.value = true })
      el.addEventListener('pause', () => { isPlaying.value = false })
    }
  }

  function cleanupVideo() {
    if (videoRef.value) {
      videoRef.value.removeEventListener('loadeddata', handleLoaded)
      videoRef.value.removeEventListener('error', handleError)
    }
  }

  onUnmounted(() => {
    cleanupVideo()
  })

  return {
    videoRef,
    isLoaded,
    isPlaying,
    isLoading,
    hasError,
    play,
    pause,
    setupVideo
  }
}
