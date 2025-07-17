<script setup>
import Sidebar from "../components/SideBar.vue";
import {useAuthStore} from "../stores/useAuthStore.js";
import {onMounted, ref} from "vue";
import axios from "../stores/useAxios.js";

const authStore = useAuthStore()
const infoMarchands = ref([])

onMounted(() => {
  getInfoMarchand()
})

const getInfoMarchand = async () => {
  try{
    infoMarchands.value = await axios.post(
        '/marchand',
        JSON.stringify({
          token: authStore.accessToken,
        }),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true
        }
    )

  }
  catch (err){
    if (!err?.response) {
      console.log("error: "+err)
    } else if (err.response?.status === 400) {
      console.log("error: "+err)
    } else {
      console.log("error: "+err)
    }
  }
}

</script>

<template>
  <Sidebar />
  <div class="flex-1">
    <div class="sm:mx-auto sm:max-w-3xl">
      <div>

        <li v-for="infoMarchand in infoMarchands" :key="infoMarchand.id">{{ infoMarchand.nomDeSociete }}</li>

      </div>
      <form class="max-w-sm">
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Account name</label>
          <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="name@flowbite.com" required />
        </div>

        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Business address</label>
          <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="" required />
        </div>

        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Numero Siren</label>
          <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="name@flowbite.com" required />
        </div>

        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Code</label>
          <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="name@flowbite.com" required />
        </div>

        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Code</label>
          <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="name@flowbite.com" required />
        </div>

        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>

    </div>
  </div>
</template>