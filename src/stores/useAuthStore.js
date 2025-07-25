import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref(null)
    const roles = ref(null)
    const user = ref(null)  

    function setAuth(token, userRole, userData) { 
        accessToken.value = token
        roles.value = userRole
        user.value = userData 
    }

    function logout() {
        accessToken.value = null
        roles.value = null
        user.value = null  
    }

    return { accessToken, roles, user, setAuth, logout } 
})