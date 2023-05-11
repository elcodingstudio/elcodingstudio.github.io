import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/MainPage.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainPage,
    },
  ]
});

export default router;