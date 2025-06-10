import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/hub',
      name: 'hub',
      component: () => import('../views/HubView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogInView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
  ],
})

export default router
