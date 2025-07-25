import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "../stores/useAuthStore.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('../views/StartView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LogInView.vue'),
    },
    {
      path: '/abonnement',
      name: 'abonnement',
      component: () => import('../views/AbonnementView.vue'),
    },
    {
      path: '/standardRegister',
      name: 'standardRegister',
      component: () => import('../views/StandardRegisterView.vue'),
    },
    {
      path: '/marchandRegister',
      name: 'marchandRegister',
      component: () => import('../views/MarchandRegisterView.vue'),
    },
    {
      path: '/hub',
      name: 'hub',
      component: () => import('../views/HubView.vue'),
      meta: {
        requiresAuth: true,
        allowedRoles: ['ADMIN', 'MARCHAND'],
      }
    },
    {
        path: '/settings',
        name: 'settings',
        component: () => import('../views/SettingsView.vue'),
        meta: {
            requiresAuth: true,
            allowedRoles: ['ADMIN', 'MARCHAND'],
        }
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue'),
      meta: {
        requiresAuth: true,
        allowedRoles: ['MARCHAND'],
      }
    },
    {
      path: '/forbidden',
      name: 'forbidden',
      component: () => import('../views/ForbiddenView.vue'),
    },
    {
      // path: '/linkpayment/:token',
      path: '/linkpayment',
      name: 'linkpayment',
      // component: () => import('../views/LinkPaymentView.vue'),
      component: () => import('../views/test.vue'),
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
export default router
