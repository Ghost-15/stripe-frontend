<script setup>
import { useAuthStore } from "../stores/useAuthStore.js";
const authStore = useAuthStore()
</script>

<template>
      <aside class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full px-3 py-4 overflow-y-auto bg-gradient-to-t from-gray-600 to-gray-900 to-50%">
        <ul class="space-y-2 font-medium">
          <li>
             <span class="mt-5 ms-3 text-white">Welcome</span>
          </li>
          <li>
            <a href="#" class="mt-10 flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group">
              <svg class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M4.857 3A1.857 1.857 0 0 0 3 4.857v4.286C3 10.169 3.831 11 4.857 11h4.286A1.857 1.857 0 0 0 11 9.143V4.857A1.857 1.857 0 0 0 9.143 3H4.857Zm10 0A1.857 1.857 0 0 0 13 4.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 9.143V4.857A1.857 1.857 0 0 0 19.143 3h-4.286Zm-10 10A1.857 1.857 0 0 0 3 14.857v4.286C3 20.169 3.831 21 4.857 21h4.286A1.857 1.857 0 0 0 11 19.143v-4.286A1.857 1.857 0 0 0 9.143 13H4.857Zm10 0A1.857 1.857 0 0 0 13 14.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 21 19.143v-4.286A1.857 1.857 0 0 0 19.143 13h-4.286Z" clip-rule="evenodd"/>
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Hub</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group">
              <svg class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"/>
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Transactions</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group">
              <svg class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8 20q-2.925 0-4.962-2.037T1 13q0-2.675 1.763-4.663T7.175 6.05l-.9-.95Q6 4.8 6 4.4t.275-.675q.3-.3.725-.3t.7.275l2.6 2.6q.3.3.3.7t-.3.7l-2.575 2.575q-.3.3-.712.3t-.713-.3q-.275-.3-.275-.712t.275-.688l.775-.775Q5.3 8.45 4.15 9.825T3 13q0 2.075 1.463 3.538T8 18h2q.425 0 .713.288T11 19t-.288.713T10 20zm6-9q-.425 0-.712-.288T13 10V5q0-.425.288-.712T14 4h7q.425 0 .713.288T22 5v5q0 .425-.288.713T21 11zm0 9q-.425 0-.712-.288T13 19v-5q0-.425.288-.712T14 13h7q.425 0 .713.288T22 14v5q0 .425-.288.713T21 20zm1-2h5v-3h-5z"/>
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Changer de plan</span>
            </a>
          </li>
          <li>
            <div v-if="authStore.roles === 'MARCHAND'">
              <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group">
                <svg class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"/>
                </svg>
                <span class="flex-1 ms-3 whitespace-nowrap">Customers</span>
              </a>
            </div>
          </li>
        </ul>

        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-500">

          <li>
            <a href="#" class="flex items-center p-2 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700 group">
              <svg class="w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Deconnexion</span>
            </a>
          </li>

        </ul>
      </div>
    </aside>
</template>

<style scoped>

</style>