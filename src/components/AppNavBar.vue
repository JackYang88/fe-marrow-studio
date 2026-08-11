<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

// TODO: 主题模式暂时屏蔽，后续如需区分主题可恢复
// const props = defineProps({
//   theme: {
//     type: String,
//     default: 'light',
//     validator: (v) => ['light', 'dark', 'overlay'].includes(v),
//   },
// })

defineProps({
  /**
   * 是否覆盖在内容上方（绝对定位）
   * 适用于首页等导航栏需要覆盖在图片上的场景
   */
  overlay: {
    type: Boolean,
    default: false,
  },
})

const { t } = useI18n()

// 导航菜单数据（支持二级菜单，后期可扩展）
const navItems = ref([
  { key: 'home', path: '/', label: () => t('nav.home') },
  { key: 'about', path: '/about', label: () => t('nav.about') },
  // 扩展示例（取消注释即可启用）：
  // {
  //   key: 'services', label: () => t('nav.services'),
  //   children: [
  //     { key: 'wedding', path: '/services/wedding', label: () => t('nav.wedding') },
  //     { key: 'portrait', path: '/services/portrait', label: () => t('nav.portrait') },
  //   ]
  // },
])

// 二级菜单状态
const openSubmenu = ref(null)

function toggleSubmenu(key) {
  openSubmenu.value = openSubmenu.value === key ? null : key
}

function closeSubmenu() {
  openSubmenu.value = null
}
</script>

<template>
  <header :class="['app-navbar', { 'app-navbar--overlay': overlay }]" @click="closeSubmenu">
    <nav class="navbar-nav-left">
      <router-link
        v-for="item in navItems.filter((_, i) => i === 0)"
        :key="item.key"
        :to="item.path"
        class="nav-link"
      >
        {{ item.label() }}
      </router-link>
    </nav>

    <router-link to="/" class="navbar-logo">
      <!-- <span class="logo">Marrow</span> -->
      <img src="../assets/images/logo.png" alt="Marrow Logo" class="logo" />
    </router-link>

    <nav class="navbar-nav-right">
      <template v-for="item in navItems.filter((_, i) => i > 0)" :key="item.key">
        <!-- 有子菜单 -->
        <div v-if="item.children" class="nav-item-has-sub" @click.stop>
          <button
            class="nav-link nav-link-btn"
            :class="{ active: openSubmenu === item.key }"
            @click="toggleSubmenu(item.key)"
          >
            {{ item.label() }}
            <span class="arrow" :class="{ open: openSubmenu === item.key }">▾</span>
          </button>
          <transition name="submenu-fade">
            <div v-if="openSubmenu === item.key" class="submenu">
              <router-link
                v-for="child in item.children"
                :key="child.key"
                :to="child.path"
                class="submenu-link"
                @click="closeSubmenu"
              >
                {{ child.label() }}
              </router-link>
            </div>
          </transition>
        </div>
        <!-- 无子菜单 -->
        <router-link v-else :to="item.path" class="nav-link">
          {{ item.label() }}
        </router-link>
      </template>
    </nav>
  </header>
</template>

<style scoped>
/* ===== 基础导航栏 ===== */
.app-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 52px 80px;
  flex-shrink: 0;
  z-index: 10;
  color: #4D4D4D;
}

/* TODO: 主题变体暂时屏蔽，后续如需区分主题可恢复 */
/* .app-navbar--dark {
  color: #fff;
}
.app-navbar--light {
  color: #4D4D4D;
} */

/* overlay 定位：覆盖在内容上方 */
.app-navbar--overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

/* ===== 左右导航区 ===== */
.navbar-nav-left,
.navbar-nav-right {
  display: flex;
  align-items: center;
  gap: 32px;
  min-width: 120px;
}

.navbar-nav-right {
  justify-content: flex-end;
}

/* ===== Logo ===== */
.logo {
  width: 6.25rem;
}

/* ===== 导航链接 ===== */
.nav-link {
  font-family: var(--font-sans);
  font-size: calc(18 * var(--unit));
  line-height: 1.2;
  letter-spacing: calc(2.7 * var(--unit));
  text-decoration: none;
  transition: color var(--transition-normal);
  white-space: nowrap;
  position: relative;
  padding-bottom: 7px;
  color: var(--color-text);
}

/* 下划线基础样式 */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-text);
  transition: width var(--transition-normal);
}

/* hover / active 下划线展开 */
.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  width: 95%;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: var(--color-text);
}

/* ===== 按钮（有子菜单时） ===== */
.nav-link-btn {
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  padding-bottom: 4px;
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color var(--transition-normal);
  white-space: nowrap;
  position: relative;
  color: var(--color-text);
}

/* 按钮下划线 */
.nav-link-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-text);
  transition: width var(--transition-normal);
}

.nav-link-btn:hover::after,
.nav-link-btn.active::after {
  width: 100%;
}

.nav-link-btn:hover {
  color: var(--color-text);
}

/* ===== 箭头 ===== */
.arrow {
  font-size: 0.7em;
  transition: transform var(--transition-normal);
}

.arrow.open {
  transform: rotate(180deg);
}

/* ===== 二级菜单 ===== */
.nav-item-has-sub {
  position: relative;
}

.submenu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 12px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  border-radius: var(--radius-sm);
  min-width: 160px;
  padding: 8px 0;
}

.submenu-link {
  display: block;
  padding: 10px 20px;
  font-family: var(--font-sans);
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  letter-spacing: 0.05em;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.submenu-link:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

/* 二级菜单过渡 */
.submenu-fade-enter-active,
.submenu-fade-leave-active {
  transition: all 0.25s ease;
}

.submenu-fade-enter-from,
.submenu-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}

/* ===== 响应式 ===== */
@media (max-width: 767px) {
  .app-navbar {
    padding: 20px 24px;
  }

  .navbar-nav-left,
  .navbar-nav-right {
    gap: 20px;
    min-width: auto;
  }

  .nav-link {
    font-size: 0.8rem;
  }
}
</style>
