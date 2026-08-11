<script setup>
import { useI18n } from 'vue-i18n'
import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'
import AppNavBar from '../components/AppNavBar.vue'
import AppFooter from '../components/AppFooter.vue'

const { t } = useI18n()
</script>

<template>
  <div class="about-page">
    <!-- 导航栏 -->
    <AppNavBar />

    <!-- 模块一：左侧文字 + 右侧 About 装饰 -->
    <section class="about-section-one">
      <div class="section-container">
        <div class="section-one-layout">
          <div class="section-one-text">
            <p class="intro-title">Designer introduction</p>
            <p class="intro-paragraph">{{ t('about.storyP1') }}</p>
            <p class="intro-paragraph">{{ t('about.storyP2') }}</p>
            <p class="intro-paragraph">{{ t('about.storyP3') }}</p>
          </div>
          <div class="section-one-decor">
            <span class="decor-about">About</span>
            <div class="spacer"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 模块二：左侧（图片+联系信息）/ 右侧（文字+图片） -->
    <section class="about-section-two">
      <div class="section-container">
        <div class="section-two-layout">
          <!-- 左侧 -->
          <div class="section-two-left">
            <div class="left-image">
              <img :src="about1" alt="About 1" />
            </div>
            <div class="spacer"></div> 
            <div class="left-contact">
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
          </div>

          <!-- 右侧 -->
          <div class="section-two-right">
            <div class="right-text">
              <h2 class="intro-title"><span>14</span> Best Bridal Designers in Asia</h2>
              <p class="right-paragraph">{{ t('about.storyP4') }}</p>
              <p class="right-paragraph">{{ t('about.storyP5') }}</p>
            </div>
            <div class="right-image">
              <img :src="about2" alt="About 2" />
            </div>
            <div class="spacer"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter theme="transparent" />
  </div>
</template>

<style scoped>
/* ===== 页面容器 ===== */
.about-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fffdf2;
}

/* ===== 通用容器 ===== */
.section-container {
  margin: 0 auto;
  padding: 0 var(--container-padding);
  width: 100%;
}

/* ===== 模块一：左侧文字 + 右侧 About 装饰 ===== */
.about-section-one {
  padding: var(--spacing-4xl) 0;
}

.section-one-layout {
  display: flex;
  align-items: center;
  gap: var(--spacing-5xl);
}

.section-one-text {
  flex: 1;
}

.intro-title {
  font-family: var(--font-script);
  color: #639BCE;
  margin-bottom: var(--spacing-lg);
  font-weight: 400;
  font-size: calc(47.6266 * var(--unit));
  line-height: 1;
  letter-spacing: calc(2.38 * var(--unit));
  white-space: nowrap;

  span {
    font-size: calc(71 * var(--unit));
    letter-spacing: 0;
    -webkit-text-stroke: calc(1 * var(--unit)) var(--cream);
    paint-order: fill stroke;
  }
}

.intro-paragraph {
  font-family: var(--font-sans);
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  font-size: calc(17 * var(--unit));
  line-height: calc(25 * var(--unit));
  letter-spacing: calc(1.36 * var(--unit));
}

.intro-paragraph:last-child {
  margin-bottom: 0;
}

.section-one-decor {
  width: 50%;
  height: 400px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.decor-about {
  width: 100%;
  font-family: var(--font-script);
  font-size: calc(117 * var(--unit));
  font-weight: 400;
  color: var(--color-text);
  letter-spacing: 0.02em;
  line-height: 0.6;
  text-orientation: mixed;
  text-align: end;
}

/* ===== 模块二 ===== */
.about-section-two {
  padding: 0 0 var(--spacing-4xl);
}

.section-two-layout {
  display: flex;
  gap: var(--spacing-5xl);
}

/* 左侧 */
.section-two-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.left-image {
  overflow: hidden;
  padding: 100px 100px 0 0;
}

.left-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

.spacer {
  flex: 1;
}

.left-contact {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.contact-item {
  display: flex;
  gap: 45px;
}

.contact-label {
  width: 75px;
  font-family: var(--font-script);
  font-size: calc(25 * var(--unit));
  font-weight: 500;
  color: #639BCE;
  flex-shrink: 0;
  line-height: 1;
}

.contact-value {
  font-family: var(--font-sans);
  color: var(--color-text);
  font-size: calc(17 * var(--unit));
  line-height: 1.5;
  letter-spacing: calc(2.55 * var(--unit));
}

/* 右侧 */
.section-two-right {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.right-text {
  flex: 1;
  padding-right: 6.5rem;
}

.right-paragraph {
  font-family: var(--font-sans);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
  font-size: calc(17 * var(--unit));
  line-height: calc(25 * var(--unit));
  letter-spacing: calc(1.36 * var(--unit));
}

.right-image {
  overflow: hidden;
}

.right-image img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-sm);
}

/* ===== 响应式 ===== */
@media (max-width: 767px) {
  .section-one-layout {
    flex-direction: column;
    gap: var(--spacing-xl);
  }

  .decor-about {
    writing-mode: horizontal-tb;
    font-size: clamp(4rem, 10vw, 6rem);
  }

  .section-two-layout {
    flex-direction: column;
    gap: var(--spacing-xl);
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .section-one-layout {
    gap: var(--spacing-xl);
  }

  .section-two-layout {
    gap: var(--spacing-xl);
  }

  .decor-about {
    font-size: clamp(4rem, 8vw, 7rem);
  }
}
</style>
