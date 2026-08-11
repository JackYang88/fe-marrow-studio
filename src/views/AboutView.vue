<script setup>
import { useI18n } from 'vue-i18n'
import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'
import AppNavBar from '../components/AppNavBar.vue'
import AppFooter from '../components/AppFooter.vue'

const { t } = useI18n()
</script>

<template>
  <main class="about-page">
    <AppNavBar />

    <section class="about-stage">
      <!-- 模块一：Designer introduction 标题 -->
      <h2 class="about-designer-title">Designer introduction</h2>

      <!-- 模块一：设计师介绍文字 -->
      <div class="designer-copy">
        <p>{{ t('about.storyP1') }}</p>
        <p>{{ t('about.storyP2') }}</p>
        <p>{{ t('about.storyP3') }}</p>
      </div>

      <!-- 模块一：About 装饰文字 -->
      <span class="about-title">About</span>

      <!-- 模块二：左侧人像 -->
      <div class="about-portrait">
        <img :src="about1" alt="Designer portrait" />
      </div>

      <!-- 模块二：右侧 Press 标题 -->
      <h2 class="press-introduction">
        <span>14</span> Best Bridal Designers in Asia
      </h2>

      <!-- 模块二：右侧 Press 文字 -->
      <div class="press-copy">
        <p>{{ t('about.storyP4') }}</p>
        <p>{{ t('about.storyP5') }}</p>
      </div>

      <!-- 模块二：右侧工作室图片 -->
      <div class="about-studio">
        <img :src="about2" alt="Studio" />
      </div>

      <!-- 联系方式 -->
      <div class="contact-list">
        <div class="contact-item">
          <span class="contact-label">Rednote :</span>
          <span class="contact-value">{{ t('about.rednote') }}</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Instagram :</span>
          <span class="contact-value">{{ t('about.instagram') }}</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Email :</span>
          <span class="contact-value">{{ t('about.email') }}</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Tel :</span>
          <span class="contact-value">{{ t('about.tel') }}</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Address :</span>
          <span class="contact-value">{{ t('about.address') }}</span>
        </div>
      </div>
    </section>

    <AppFooter theme="transparent" />
  </main>
</template>

<style scoped>
/* ===== 页面容器 ===== */
.about-page {
  width: 100%;
  overflow: hidden;
  background: var(--cream);
}

/* ===== 舞台：固定高度，所有子元素绝对定位 ===== */
.about-stage {
  height: calc(2394.3 * var(--unit));
  background: var(--cream);
}

/* ===== 模块一：Designer introduction 标题 ===== */
.about-designer-title {
  position: absolute;
  top: calc(244 * var(--unit));
  left: calc(112.2 * var(--unit));
  font-family: var(--font-script);
  font-size: calc(47.6266 * var(--unit));
  font-weight: 400;
  color: var(--blue);
  line-height: 1;
  letter-spacing: calc(2.38 * var(--unit));
  white-space: nowrap;
  margin: 0;
}

/* ===== 模块一：设计师介绍文字 ===== */
.designer-copy {
  position: absolute;
  top: calc(317.9 * var(--unit));
  left: calc(114.9 * var(--unit));
  width: calc(688 * var(--unit));
}

.designer-copy p {
  font-family: var(--font-sans);
  font-size: calc(17 * var(--unit));
  line-height: calc(25 * var(--unit));
  letter-spacing: calc(1.36 * var(--unit));
  color: var(--color-text);
  margin: 0 0 calc(24 * var(--unit)) 0;
}

.designer-copy p:last-child {
  margin-bottom: 0;
}

/* ===== 模块一：About 装饰文字 ===== */
.about-title {
  position: absolute;
  top: calc(260 * var(--unit));
  left: calc(1542.9 * var(--unit));
  font-family: var(--font-script);
  font-size: calc(117 * var(--unit));
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 0.02em;
  line-height: 0.6;
  margin: 0;
}

/* ===== 模块二：左侧人像 ===== */
.about-portrait {
  position: absolute;
  top: calc(948.21 * var(--unit));
  left: calc(107.24 * var(--unit));
  width: calc(677 * var(--unit));
}

.about-portrait img {
  width: 100%;
  height: auto;
  display: block;
}

/* ===== 模块二：右侧 Press 标题 ===== */
.press-introduction {
  position: absolute;
  top: calc(739.5 * var(--unit));
  left: calc(1074.96 * var(--unit));
  font-family: var(--font-script);
  font-size: calc(47.6266 * var(--unit));
  font-weight: 400;
  color: var(--blue);
  line-height: 1;
  letter-spacing: calc(2.38 * var(--unit));
  white-space: nowrap;
  margin: 0;
}

.press-introduction span {
  font-size: calc(71 * var(--unit));
  letter-spacing: 0;
  -webkit-text-stroke: calc(1 * var(--unit)) var(--cream);
  paint-order: fill stroke;
}

/* ===== 模块二：右侧 Press 文字 ===== */
.press-copy {
  position: absolute;
  top: calc(816 * var(--unit));
  left: calc(1074.5 * var(--unit));
  width: calc(575 * var(--unit));
}

.press-copy p {
  font-family: var(--font-sans);
  font-size: calc(17 * var(--unit));
  line-height: calc(25 * var(--unit));
  letter-spacing: calc(1.36 * var(--unit));
  color: var(--color-text-light);
  margin: 0 0 calc(24 * var(--unit)) 0;
}

.press-copy p:last-child {
  margin-bottom: 0;
}

/* ===== 模块二：右侧工作室图片 ===== */
.about-studio {
  position: absolute;
  top: calc(1212.24 * var(--unit));
  left: calc(1074.73 * var(--unit));
  width: calc(729.6 * var(--unit));
}

.about-studio img {
  width: 100%;
  height: auto;
  display: block;
}

/* ===== 联系方式 ===== */
.contact-list {
  position: absolute;
  top: calc(1950 * var(--unit));
  left: calc(115.2 * var(--unit));
  width: calc(780 * var(--unit));
}

.contact-item {
  display: flex;
  gap: calc(45 * var(--unit));
  margin-bottom: calc(45 * var(--unit));
}

.contact-item:last-child {
  margin-bottom: 0;
}

.contact-label {
  width: calc(85 * var(--unit));
  font-family: var(--font-script);
  font-size: calc(25 * var(--unit));
  font-weight: 500;
  color: var(--blue);
  flex-shrink: 0;
  line-height: 1;
}

.contact-value {
  font-family: var(--font-sans);
  font-size: calc(17 * var(--unit));
  color: var(--color-text);
  line-height: 1.5;
  letter-spacing: calc(2.55 * var(--unit));
}

/* ===== 响应式：移动端切换为 flex 布局 ===== */
@media (max-width: 767px) {
  .about-stage {
    height: auto;
    position: static;
    display: flex;
    flex-direction: column;
    padding: calc(80 * var(--unit)) calc(40 * var(--unit));
    gap: calc(48 * var(--unit));
  }

  .about-designer-title,
  .designer-copy,
  .about-title,
  .about-portrait,
  .press-introduction,
  .press-copy,
  .about-studio,
  .contact-list {
    position: static;
    top: auto;
    left: auto;
    width: auto;
  }

  .about-designer-title {
    font-size: 1.75rem;
  }

  .designer-copy {
    width: 100%;
  }

  .designer-copy p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .about-title {
    font-size: 4rem;
    text-align: center;
  }

  .about-portrait {
    width: 100%;
  }

  .press-introduction {
    font-size: 1.75rem;
  }

  .press-copy {
    width: 100%;
  }

  .press-copy p {
    font-size: 0.9rem;
    line-height: 1.6;
  }

  .about-studio {
    width: 100%;
  }

  .contact-list {
    width: 100%;
  }

  .contact-item {
    flex-direction: column;
    gap: 4px;
  }

  .contact-label {
    width: auto;
    font-size: 1.1rem;
  }

  .contact-value {
    font-size: 0.9rem;
  }
}
</style>
