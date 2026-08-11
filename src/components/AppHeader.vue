<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t, locale } = useI18n()
const router = useRouter()

function switchLocale() {
  const newLocale = locale.value === 'zh' ? 'en' : 'zh'
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
  document.documentElement.lang = newLocale
}
</script>

<template>
  <header class="app-header">
    <div class="container header-inner">
      <router-link to="/" class="logo">
        Marrow
      </router-link>

      <nav class="nav">
        <router-link to="/" class="nav-link">{{ t('nav.home') }}</router-link>
        <router-link to="/about" class="nav-link">{{ t('nav.about') }}</router-link>
        <router-link to="/gallery" class="nav-link">{{ t('nav.gallery') }}</router-link>
        <router-link to="/services" class="nav-link">{{ t('nav.services') }}</router-link>
        <router-link to="/contact" class="nav-link">{{ t('nav.contact') }}</router-link>
      </nav>

      <button class="lang-switch" @click="switchLocale">
        {{ t('common.switchLang') }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.02em;
}

.nav {
  display: flex;
  gap: var(--spacing-lg);
}

.nav-link {
  font-size: 0.9rem;
  color: var(--color-text);
  transition: color var(--transition-fast);
  position: relative;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary);
}

.lang-switch {
  font-size: 0.85rem;
  padding: 6px 16px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-light);
  transition: all var(--transition-fast);
}

.lang-switch:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

@media (max-width: 767px) {
  .nav {
    display: none;
  }

  .header-inner {
    height: 56px;
  }
}
</style>
