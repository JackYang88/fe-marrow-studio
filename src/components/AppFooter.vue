<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="app-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <span class="footer-logo">Marrow Studio</span>
        <p class="footer-desc">{{ t('home.heroSubtitle') }}</p>
      </div>
      <div class="footer-copyright">
        &copy; {{ new Date().getFullYear() }} Marrow Studio. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  background: var(--color-bg-dark);
  color: rgba(255, 255, 255, 0.7);
  padding: var(--spacing-2xl) 0;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.footer-logo {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: var(--color-primary-light);
}

.footer-desc {
  font-size: 0.85rem;
  margin-top: var(--spacing-xs);
}

.footer-copyright {
  font-size: 0.8rem;
}

@media (max-width: 767px) {
  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
