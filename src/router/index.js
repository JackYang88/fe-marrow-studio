import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/HomeView.vue'),
        meta: { title: 'Marrow Studio' }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/AboutView.vue'),
        meta: { title: 'About - Marrow Studio' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to) => {
  document.title = to.meta.title || 'Marrow Studio'
})

export default router
