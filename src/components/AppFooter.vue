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
  flex-shrink: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  font-family: var(--font-sans);
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: var(--color-text-light);
  margin-top: auto;
}

/* 主题变体 */
.app-footer--light {
  background: #fff;
}

.app-footer--transparent {
  background: transparent;
}

.footer-copyright {
  font-weight: 300;
}

.footer-brand {
  width: 55px;
}

/* ===== 响应式 ===== */
@media (max-width: 767px) {
  .app-footer {
    padding: 0 24px;
    font-size: 0.75rem;
  }

  .footer-brand {
    font-size: 0.85rem;
  }
}
</style>
