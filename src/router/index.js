import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "../stores/useAuthStore.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path: '/hub',
      name: 'hub',
      component: () => import('../views/HubView.vue'),
      meta: {
        requiresAuth: true,
        allowedRoles: ['DEV', 'ADMIN'],
      }
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: () => import('../views/ForbiddenView.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  const requiresAuth = to.meta.requiresAuth
  const allowedRoles = to.meta.allowedRoles

  if (requiresAuth) {
    if (!authStore.accessToken) {
      next({ name: 'login', query: { redirect: to.fullPath } })
    } else if (!authStore.roles.some(role => allowedRoles.includes(role))) {
      next({ name: 'forbidden' })
    } else {
      next()
    }
  } else {
    next()
  }
})
// Admin Marchand
export default router
