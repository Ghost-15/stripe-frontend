<script setup>
import Sidebar from "../components/SideBar.vue";
import { useAuthStore } from "../stores/useAuthStore.js";
import { ref } from 'vue';

const authStore = useAuthStore();
const showPersonalDetails = ref(false);

const togglePersonalDetails = () => {
  showPersonalDetails.value = !showPersonalDetails.value;
};
</script>

<template>
  <Sidebar />
  <div class="flex-1">
    <div class="sm:mx-auto sm:max-w-3xl">
      <h2 class="mt-5 mb-2 text-lg font-semibold text-gray-900">Personal settings</h2>
      
      <div class="border border-gray-200 rounded-lg mb-4">
        <div 
          @click="togglePersonalDetails"
          class="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200"
        >
          <div class="flex items-center">
            <svg class="w-6 h-6 text-gray-800 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
            </svg>
            <span class="text-gray-700 font-medium">Personal details</span>
          </div>
          <svg 
            :class="['w-5 h-5 text-gray-500 transform transition-transform duration-200', showPersonalDetails ? 'rotate-180' : '']"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        
        <div 
          :class="[
            'overflow-hidden transition-all duration-300 ease-in-out',
            showPersonalDetails ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          ]"
        >
          <div class="px-4 pb-4 border-t border-gray-100">
            <p class="text-gray-600 text-sm mt-3 mb-4">
              Personal details, password, communication preferences, and your active sessions.
            </p>
            
            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                  <input 
                    type="text" 
                    :value="authStore.user?.first_name || ''"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre prénom"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                  <input 
                    type="text" 
                    :value="authStore.user?.last_name || ''"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  >
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  :value="authStore.user?.username || ''"
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                >
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Nouveau mot de passe</label>
                  <input 
                    type="password" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Laissez vide pour ne pas changer"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
                  <input 
                    type="password" 
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirmez votre mot de passe"
                  >
                </div>
              </div>
              
              <div class="border-t border-gray-200 pt-4 mt-6">
                <h4 class="text-sm font-semibold text-gray-900 mb-3">Préférences de communication</h4>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <input type="checkbox" id="email-notifications" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <label for="email-notifications" class="ml-2 text-sm text-gray-700">Recevoir les notifications par email</label>
                  </div>
                  <div class="flex items-center">
                    <input type="checkbox" id="marketing-emails" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <label for="marketing-emails" class="ml-2 text-sm text-gray-700">Recevoir les emails marketing et promotionnels</label>
                  </div>
                  <div class="flex items-center">
                    <input type="checkbox" id="security-alerts" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" checked>
                    <label for="security-alerts" class="ml-2 text-sm text-gray-700">Alertes de sécurité (recommandé)</label>
                  </div>
                  <div class="flex items-center">
                    <input type="checkbox" id="product-updates" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                    <label for="product-updates" class="ml-2 text-sm text-gray-700">Mises à jour produit et nouvelles fonctionnalités</label>
                  </div>
                </div>
              </div>

              <div class="border-t border-gray-200 pt-4 mt-6">
                <h4 class="text-sm font-semibold text-gray-900 mb-3">Sessions actives</h4>
                <div class="space-y-3">
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <div>
                        <p class="text-sm font-medium text-gray-900">Session actuelle</p>
                        <p class="text-xs text-gray-500">Chrome sur Windows • Paris, France</p>
                        <p class="text-xs text-gray-400">Dernière activité: maintenant</p>
                      </div>
                    </div>
                    <span class="text-xs text-green-600 font-medium">ACTIVE</span>
                  </div>
                  
                  <div class="flex items-center justify-between p-3 bg-white border rounded-md">
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                      </svg>
                      <div>
                        <p class="text-sm font-medium text-gray-900">Firefox sur macOS</p>
                        <p class="text-xs text-gray-500">Paris, France</p>
                        <p class="text-xs text-gray-400">Dernière activité: il y a 2 jours</p>
                      </div>
                    </div>
                    <button class="text-xs text-red-600 hover:text-red-800 font-medium">
                      DÉCONNECTER
                    </button>
                  </div>
                  
                  <div class="flex items-center justify-between p-3 bg-white border rounded-md">
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                      </svg>
                      <div>
                        <p class="text-sm font-medium text-gray-900">Application mobile</p>
                        <p class="text-xs text-gray-500">iPhone • Paris, France</p>
                        <p class="text-xs text-gray-400">Dernière activité: il y a 1 semaine</p>
                      </div>
                    </div>
                    <button class="text-xs text-red-600 hover:text-red-800 font-medium">
                      DÉCONNECTER
                    </button>
                  </div>
                  
                  <div class="mt-3">
                    <button class="text-sm text-red-600 hover:text-red-800 font-medium">
                      Déconnecter toutes les autres sessions
                    </button>
                  </div>
                </div>
              </div>
              
              <div class="pt-4 border-t border-gray-200 mt-6">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
                  Sauvegarder les modifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="authStore.roles[0] === 'MARCHAND'" class="border border-gray-200 rounded-lg">
        <router-link to="/account" class="block">
          <div class="p-4 hover:bg-gray-50 transition-colors duration-200">
            <div class="flex items-center">
              <svg class="w-6 h-6 text-gray-800 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
              </svg>
              <span class="text-gray-700 font-medium">Business</span>
            </div>
            <p class="text-gray-600 text-sm mt-2 ml-9">
              Account details, account health, public info, payouts, legal entity, custom domains, and more.
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>