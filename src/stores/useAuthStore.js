import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref(null)
    const roles = ref(null)

    function setAuth(token, userRole) {
        accessToken.value = token
        roles.value = userRole
    }

    function logout() {
        accessToken.value = null
        roles.value = null
    }

    return { accessToken, roles, setAuth, logout }
})
