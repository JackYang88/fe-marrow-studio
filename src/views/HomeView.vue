<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import home1 from '../assets/images/home1.png'
import home2 from '../assets/images/home2.png'
import AppNavBar from '../components/AppNavBar.vue'
import AppFooter from '../components/AppFooter.vue'

const slides = [home1, home2]
const currentSlide = ref(0)
let timer = null

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
  timer = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="home-page">
  <section class="home">
    <!-- 背景轮播 -->
    <div class="carousel">
      <transition-group name="carousel-fade">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          v-show="currentSlide === index"
          class="carousel-slide"
          :style="{ backgroundImage: `url(${slide})` }"
        ></div>
      </transition-group>
    </div>

    <!-- 导航栏（覆盖在图片上） -->
    <AppNavBar overlay />
  </section>

  <!-- 后续内容块在此处追加，例如：-->
  <!-- <section class="home-section">...</section> -->

  <!-- Footer（独立白色背景） -->
  <AppFooter theme="light" />
  </div>
</template>

<style scoped>
/* ===== 页面容器（支持滚动追加内容） ===== */
.home-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.home {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
}

/* ===== 轮播 ===== */
.carousel {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.carousel-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 轮播过渡 */
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 1.2s ease;
}

.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}

.carousel-fade-leave-active {
  position: absolute;
}

/* ===== 内容 ===== */
/* .home-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: var(--spacing-2xl);
} */

.home-title {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 16px;
  margin-bottom: var(--spacing-md);
  line-height: 1.1;
}

.title-script {
  font-family: var(--font-script);
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.02em;
}

.title-sans {
  font-family: var(--font-sans);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.home-subtitle {
  font-family: var(--font-sans);
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: 0.1em;
  margin-bottom: var(--spacing-lg);
}

.home-divider {
  width: 60px;
  height: 1px;
  background: var(--color-primary-light);
  margin: 0 auto var(--spacing-lg);
}

.home-desc {
  font-family: var(--font-sans);
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.75);
  letter-spacing: 0.05em;
  line-height: 1.8;
  max-width: 500px;
  margin: 0 auto var(--spacing-xl);
}

.home-cta {
  display: inline-block;
  padding: 14px 48px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  transition: all var(--transition-normal);
  text-decoration: none;
}

.home-cta:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: #fff;
  transform: translateY(-2px);
}

/* ===== 响应式 ===== */
@media (max-width: 767px) {
  .home-title {
    flex-direction: column;
    gap: 4px;
  }
}
</style>
