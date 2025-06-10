<script setup>
import Sidebar from "../components/SideBar.vue";

</script>

<template>
  <Sidebar />
  <div class="flex-1 py-10 px-4 sm:px-10">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h5 class="text-xl font-medium text-stone-800 mb-2">Bienvenu a Financial Record</h5>

        <div class="mt-5 grid grid-cols-2 gap-4 text-white">
          <a href="">
            <div class="w-full max-w-sm p-4 border rounded-lg shadow-sm sm:p-6 md:p-8 bg-slate-700 border-gray-800 hover:bg-gray-800">
              <h5 class="mb-2 font-bold tracking-tight text-white">
                Général</h5>
            </div>
          </a>

          <a href="">
            <div class="w-full max-w-sm p-4 border rounded-lg shadow-sm sm:p-6 md:p-8 bg-slate-700 border-gray-800 hover:bg-gray-800">
              <h5 class="mb-2 font-bold tracking-tight text-white">
                Client</h5>
            </div>
          </a>

          <a href="">
            <div class="w-full max-w-sm p-4 border rounded-lg shadow-sm sm:p-6 md:p-8 bg-slate-700 border-gray-800 hover:bg-gray-800">
              <h5 class="mb-2 font-bold tracking-tight text-white">
                Entrée</h5>
            </div>
          </a>

          <a href="">
            <div class="w-full max-w-sm p-4 border rounded-lg shadow-sm sm:p-6 md:p-8 bg-slate-700 border-gray-800 hover:bg-gray-800">
              <h5 class="mb-2 font-bold tracking-tight text-white">
                Sortie</h5>
            </div>
          </a>
        </div>

        <hr class="w-48 h-1 mx-auto my-10 border-0 rounded-sm bg-gray-700">

        <div class="p-4 border rounded-lg shadow-sm bg-slate-900 border-gray-800">

          <a href="" class="font-semibold text-red-600 hover:underline hover:underline-offset-8">
            <div class="flex justify-center">
              Déconnexion
            </div>
          </a>

        </div>

      </div>
    </div>
</template>