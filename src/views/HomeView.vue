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
  <main class="home-page">
    <section class="home-hero">
      <AppNavBar overlay />

      <div class="home-carousel">
        <transition-group name="carousel-fade">
          <img
            v-for="(slide, index) in slides"
            :key="index"
            v-show="currentSlide === index"
            :src="slide"
            class="home-slide"
            :class="[`home-slide--${index + 1}`, { 'is-active': currentSlide === index }]"
            alt=""
          />
        </transition-group>
      </div>
    </section>

    <AppFooter theme="light" />
  </main>
</template>

<style scoped>
/* ===== 页面容器 ===== */
.home-page {
  width: 100%;
  overflow: hidden;
}

/* ===== 首屏区域（高度由轮播图自适应撑开） ===== */
.home-hero {
  position: relative;
  background: var(--cream);
  /* 防止图片加载前容器高度塌陷导致 footer 闪烁到顶部 */
  min-height: 100svh;
}

/* ===== 轮播容器 ===== */
.home-carousel {
  position: relative;
  width: 100%;
}

/* ===== 轮播图片 ===== */
.home-slide {
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
}

/* 当前激活的图片：在文档流中，撑开容器高度 */
.home-slide.is-active {
  position: relative;
}

/* 非激活图片：绝对定位叠放，不影响容器高度 */
.home-slide:not(.is-active) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

/* 轮播过渡 */
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity 900ms ease;
}

.carousel-fade-enter-from,
.carousel-fade-leave-to {
  opacity: 0;
}

.carousel-fade-leave-active {
  position: absolute;
  width: 100%;
}

/* ===== 响应式 ===== */
@media (max-width: 767px) {
  .home-slide:not(.is-active) {
    object-position: 50% 42%;
  }
}
</style>
