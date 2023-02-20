import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    };
  },
  routes: [
    {
      path: '/',
      name: '首頁',
      component: IndexView
    },
    {
      path: '/style',
      name: '風格',
      component: () => import('../views/StyleView.vue'),
    },
    {
      //風格內頁
      path: '/portfolio/:id',
      name: 'portfolio',
      component: () => import('../views/styleViews/StyleListView.vue')
    },
    {
      path: '/color',
      name: '色系',
      component: () => import('../views/ColorView.vue')
    },
    {
      path: '/about',
      name: '關於我們',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
