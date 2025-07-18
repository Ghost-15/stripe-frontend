<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '../stores/useAxios.js';
import { useAuthStore } from "../stores/useAuthStore.js";


const router = useRouter()
const authStore = useAuthStore()
const username = ref('');
const password = ref('');
const errMsg = ref('');
const loading = ref(false);
const refEl = ref(null);

const handleSubmit = async () => {
  try {
    loading.value = true;
    const response = await axios.post(
        '/auth',
        JSON.stringify({
          username: username.value,
          password: password.value
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
    );

    const accessToken = response.data.accessToken;
    const roles = response.data.roles;
    authStore.setAuth(accessToken, roles)
    await router.push('/hub')
  } catch (err) {
    loading.value = false;
    if (!err?.response) {
      errMsg.value = 'Login Failed';
    } else if ([400, 401, 403].includes(err.response.status)) {
      errMsg.value = 'Wrong Username or Password';
    } else {
      errMsg.value = 'Login Failed';
    }
  }
};
</script>

<template>
  <div class="flex-1 py-10 px-4 sm:px-10 bg-gradient-to-t from-gray-600 to-gray-900">

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <p ref="refEl" class="text-red-600 text-center" aria-live="assertive">{{ errMsg }}</p>

      <div class="mt-20 w-full max-w-sm p-4 border border-gray-700 rounded-lg shadow-sm sm:p-6 md:p-8 bg-gray-800">
      <form class="space-y-6" @submit.prevent="handleSubmit">
            <h5 class="text-xl font-medium text-white">Sign in to our platform</h5>
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white">Email</label>
              <input
                  id="username"
                  name="username"
                  type="email"
                  v-model="username"
                  placeholder="email@exemple.com"
                  class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  required />
            </div>
            <div>
              <div class="flex items-start">
                <label for="password" class="block mb-2 text-sm font-medium text-white">Password</label>
                <a href="#" class="ms-auto text-sm hover:underline text-red-600">Lost Password?</a>
              </div>
              <input
                  id="password"
                  name="password"
                  type="password"
                  v-model="password"
                  placeholder="********"
                  class="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white"
                  required />
            </div>


            <div>
              <button
                  v-if="!loading"
                  id="Submit"
                  type="submit"
                  class="flex w-full justify-center rounded-md  bg-[#bdd2e9] text-[#14191f] px-5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>

              <button
                  v-else
                  id="Loading"
                  disabled
                  class="w-full px-3 py-1.5 rounded-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-slate-500 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 inline-flex items-center justify-center"
              >
                <svg
                    aria-hidden="true"
                    role="status"
                    class="inline w-4 h-4 me-3 text-gray-200 animate-spin text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591
         50 100.591C22.3858 100.591 0 78.2051
         0 50.5908C0 22.9766 22.3858 0.59082
         50 0.59082C77.6142 0.59082 100 22.9766
         100 50.5908ZM9.08144 50.5908C9.08144
         73.1895 27.4013 91.5094 50 91.5094C72.5987
         91.5094 90.9186 73.1895 90.9186
         50.5908C90.9186 27.9921 72.5987 9.67226
         50 9.67226C27.4013 9.67226 9.08144
         27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                  />
                  <path
                      d="M93.9676 39.0409C96.393 38.4038
         97.8624 35.9116 97.0079 33.5539C95.2932
         28.8227 92.871 24.3692 89.8167 20.348C85.8452
         15.1192 80.8826 10.7238 75.2124
         7.41289C69.5422 4.10194 63.2754
         1.94025 56.7698 1.05124C51.7666
         0.367541 46.6976 0.446843 41.7345
         1.27873C39.2613 1.69328 37.813
         4.19778 38.4501 6.62326C39.0873
         9.04874 41.5694 10.4717 44.0505
         10.1071C47.8511 9.54855 51.7191
         9.52689 55.5402 10.0491C60.8642
         10.7766 65.9928 12.5457 70.6331
         15.2552C75.2735 17.9648 79.3347
         21.5619 82.5849 25.841C84.9175
         28.9121 86.7997 32.2913 88.1811
         35.8758C89.083 38.2158 91.5421
         39.6781 93.9676 39.0409Z"
                      fill="#1C64F2"
                  />
                </svg>
                Loading...
              </button>
            </div>

            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered? <router-link to="/abonnement" class="text-blue-700 hover:underline dark:text-blue-500">Create account</router-link>
            </div>
          </form>
        </div>



    </div>
  </div>
</template>