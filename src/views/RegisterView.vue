<script setup>
import axios from '../api/axios.js';
import { ref } from 'vue'

const first_name = ref('')
const last_name = ref('')
const username = ref('')
const password = ref('')

const loading = ref(false)
const errMsg = ref('')
const succMsg = ref('')
const refEl = ref(null)

const handleSubmit = async () => {
  loading.value = true
  errMsg.value = ''
  succMsg.value = ''

  try {
    const response = await axios.post(
        '/users',
        JSON.stringify({
          first_name: first_name.value,
          last_name: last_name.value,
          username: username.value,
          password: password.value,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
    )

    if (response?.status === 200) {
      first_name.value = ''
      last_name.value = ''
      username.value = ''
      password.value = ''
      succMsg.value = "Nouveau utilisateur ajouté. Un mail a été envoyé à l'adresse email recueillie."
    }
  } catch (err) {
    loading.value = false
    if (!err?.response) {
      errMsg.value = 'Fetch Failed'
    } else if (err.response?.status === 401) {
      errMsg.value = 'Unauthorized'
    } else if (err.response?.status === 403) {
      errMsg.value = 'Forbidden'
    } else if (err.response?.status === 406) {
      errMsg.value = 'Cette adresse mail existe déjà'
    } else {
      errMsg.value = 'Fetch Failed'
    }
    refEl.value?.focus()
  }
}
</script>


<template>
  <div class="flex-1 py-10 px-4 sm:px-10">
    <div class="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Ajouter un utilisateur</h2>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <p ref="refEl" class="text-green-600 text-center" aria-live="assertive">{{ succMsg }}</p>
      <p ref="refEl" class="text-red-600 text-center" aria-live="assertive">{{ errMsg }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-6">
      <div>
        <label for="First name" class="block text-sm font-medium leading-6 text-gray-900">
          Prénom</label>
        <div class="mt-2">
          <input
              type="text"
              placeholder="Enter votre prénom"
              v-model="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
          />
        </div>
      </div>

      <div>
        <label for="Last name" class="block text-sm font-medium leading-6 text-gray-900">
          Nom</label>
        <div class="mt-2">
          <input
              type="text"
              placeholder="Enter votre nom"
              v-model="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
          />
        </div>
      </div>

      <div>
        <label for="Username" class="block text-sm font-medium leading-6 text-gray-900">
          Email</label>
        <div class="mt-2">
          <input
              type="email"
              v-model="username"
              placeholder="Enter votre username"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
          />
        </div>
      </div>

        <div>
          <label for="Password" class="block text-sm font-medium leading-6 text-gray-900">
            Password</label>
          <div class="mt-2">
            <input
                   type="password"
                   v-model="password"
                   placeholder="Enter votre mot de passe"
                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                   required
            />
          </div>
        </div>

      <div>
        <button
            v-if="!loading"
            id="Submit"
            type="submit"
            class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Soumettre
        </button>

        <button
            v-else
            id="Loading"
            disabled
            class="w-full px-3 py-1.5 rounded-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 inline-flex items-center"
        >
          <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none">
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591..."
                fill="currentColor"
            />
            <path
                d="M93.9676 39.0409C96.393 38.4038..."
                fill="#1C64F2"
            />
          </svg>
          Chargement...
        </button>
      </div>

      </form>
    </div>
  </div>
</template>
