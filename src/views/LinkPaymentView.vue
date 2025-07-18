<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const token = route.params.token

</script>

<template>
  <div class="flex-1 py-10 px-4 sm:px-10">
    <div class="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Pay with card</h2>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <form @submit.prevent="handleSubmit" class="space-y-6">

        <div>
          <label for="Username" class="block text-sm font-medium leading-6 text-gray-900">
            Email</label>
          <div class="mt-2">
            <input
                type="email"
                v-model="username"
                placeholder="Email@exemple.com"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
            />
          </div>
        </div>

        <div class="mt-5">
          <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Payment Method</h2>
        </div>

        <div>
        <div class="mb-6">
          <label for="CardInfo" class="block mb-2 text-sm font-medium text-gray-900">Card information</label>
          <input
              type="text"
              v-model="username"
              placeholder="card information"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
          />
        </div>
        <div class="grid gap-2 grid-cols-2">
          <div>
            <label for="website" class="block mb-2 text-sm font-medium text-gray-900">Expiry date</label>
            <input
                type="email"
                v-model="username"
                placeholder="expiry date"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
            />
          </div>
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900">CVV</label>
            <input
                type="email"
                v-model="username"
                placeholder="cvv"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
            />
          </div>
        </div>
        </div>

        <div>
          <label for="Username" class="block text-sm font-medium leading-6 text-gray-900">
            Cardholder name</label>
          <div class="mt-2">
            <input
                type="email"
                v-model="username"
                placeholder="Full name on card"
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
            Pay
          </button>

          <button
              v-else
              id="Loading"
              disabled
              class="w-full px-3 py-1.5 rounded-lg focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 inline-flex items-center justify-center">
            <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
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

      </form>
    </div>
  </div>
</template>
