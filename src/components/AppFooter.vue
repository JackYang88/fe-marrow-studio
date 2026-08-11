<script setup>
defineProps({
  /**
   * 主题模式：
   * - 'light' — 白色背景（默认，适用于 Home 等页面）
   * - 'transparent' — 透明背景，继承父元素背景色（适用于 About 等页面）
   */
  theme: {
    type: String,
    default: 'light',
    validator: (v) => ['light', 'transparent'].includes(v),
  },
})
</script>

<template>
  <footer :class="['app-footer', `app-footer--${theme}`]">
    <span class="footer-copyright">&copy; 2026 - Marrow</span>
    <img src="../assets/images/logo.png" alt="Marrow Logo" class="footer-brand" />
  </footer>
</template>

<style scoped>
.app-footer {
  position: relative;
  flex-shrink: 0;
  height: calc(97.7 * var(--unit));
  font-family: var(--font-sans);
  color: var(--color-text-light);
}

/* 主题变体 */
.app-footer--light {
  background: #fff;
}

.app-footer--transparent {
  background: transparent;
}

.footer-copyright {
  position: absolute;
  top: calc(39.9 * var(--unit));
  left: calc(103.8 * var(--unit));
  font-size: calc(17 * var(--unit));
  font-weight: 300;
  letter-spacing: calc(1.36 * var(--unit));
}

.footer-brand {
  position: absolute;
  top: calc(42.4 * var(--unit));
  right: calc(130.4 * var(--unit));
  width: calc(76.8 * var(--unit));
}

/* ===== 响应式 ===== */
@media (max-width: 767px) {
  .app-footer {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }

  .footer-copyright {
    position: static;
    font-size: 0.75rem;
  }

  .footer-brand {
    position: static;
    width: 3rem;
  }
}
</style>
