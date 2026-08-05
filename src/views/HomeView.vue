<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="home">
    <div class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">{{ t('home.heroTitle') }}</h1>
        <p class="hero-subtitle">{{ t('home.heroSubtitle') }}</p>
        <router-link to="/about" class="hero-cta">
          {{ t('home.cta') }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f0e8 0%, #e8ddd0 100%);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(255, 255, 255, 0.3) 100%);
}

.hero-content {
  position: relative;
  text-align: center;
  padding: var(--spacing-2xl);
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  color: var(--color-primary-dark);
  margin-bottom: var(--spacing-md);
  letter-spacing: 0.05em;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.4rem);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xl);
  font-weight: 300;
}

.hero-cta {
  display: inline-block;
  padding: 14px 40px;
  background: var(--color-primary);
  color: white;
  font-size: 0.95rem;
  letter-spacing: 0.1em;
  border-radius: var(--radius-sm);
  transition: all var(--transition-normal);
}

.hero-cta:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
</style>
