<script>
</script>

<template>
<div class="flex-1 grid grid-flow-col justify-items-center bg-gradient-to-t from-gray-600 to-gray-900 to-50%">
  <div class="mt-20 grid grid-cols-2 gap-8">
    <div>
    <router-link to="/marchandRegister">
      <div class="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-sm sm:p-8 bg-gray-800 border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-white ">Marchand plan</h5>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center">
            <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-400 ms-3">Dashboard personnalisé: volume de transactions, taux de conversion</span>
          </li>
          <li class="flex">
            <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-400 ms-3">Consultation et recherche de transactions</span>
          </li>
          <li class="flex">
            <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-400 ms-3">Exécution de remboursements</span>
          </li>
        </ul>

        <button type="submit" class="flex w-full justify-center rounded-md  bg-[#bdd2e9] text-[#14191f] px-5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Choose plan
        </button>
      </div>
    </router-link>
    </div>

    <div>
    <router-link to="/standardRegister">
      <div class="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-sm sm:p-8 bg-gray-800 border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-white">Standard plan</h5>
        <ul role="list" class="space-y-5 my-7">
          <li class="flex items-center">
            <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-400 ms-3">Dashboard global avec indicateurs clés (KPIs) et graphiques</span>
          </li>

          <li class="flex items-center">
            <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-400 ms-3">Recherche et suivi des transactions</span>
          </li>

          <li class="flex line-through decoration-gray-500">
            <svg class="shrink-0 w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 ms-3">Dashboard personnalisé: volume de transactions, taux de conversion</span>
          </li>

        </ul>

        <button type="submit"
                class="flex w-full justify-center rounded-md  bg-[#bdd2e9] text-[#14191f] px-5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Choose plan
        </button>
      </div>
    </router-link>
    </div>

  </div>
</div>
</template>