<script>
</script>

<template>
  <div class="flex-1 mt-20">
    <router-link to="/marchandRegister" class="text-blue-500 hover:underline">
      Marchand
    </router-link>
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
      <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
    </div>
    <router-link to="/standardRegister" class="text-blue-500 hover:underline">
      Standard
    </router-link>



<!--    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">-->
<!--      <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Standard plan</h5>-->
<!--      <div class="flex items-baseline text-gray-900 dark:text-white">-->
<!--        <span class="text-3xl font-semibold">$</span>-->
<!--        <span class="text-5xl font-extrabold tracking-tight">49</span>-->
<!--        <span class="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>-->
<!--      </div>-->
<!--      <ul role="list" class="space-y-5 my-7">-->
<!--        <li class="flex items-center">-->
<!--          <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>-->
<!--          </svg>-->
<!--          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">2 team members</span>-->
<!--        </li>-->
<!--        <li class="flex">-->
<!--          <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>-->
<!--          </svg>-->
<!--          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">20GB Cloud storage</span>-->
<!--        </li>-->
<!--        <li class="flex">-->
<!--          <svg class="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>-->
<!--          </svg>-->
<!--          <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Integration help</span>-->
<!--        </li>-->
<!--        <li class="flex line-through decoration-gray-500">-->
<!--          <svg class="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>-->
<!--          </svg>-->
<!--          <span class="text-base font-normal leading-tight text-gray-500 ms-3">Sketch Files</span>-->
<!--        </li>-->
<!--        <li class="flex line-through decoration-gray-500">-->
<!--          <svg class="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>-->
<!--          </svg>-->
<!--          <span class="text-base font-normal leading-tight text-gray-500 ms-3">API Access</span>-->
<!--        </li>-->
<!--        <li class="flex line-through decoration-gray-500">-->
<!--          <svg class="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>-->
<!--          </svg>-->
<!--          <span class="text-base font-normal leading-tight text-gray-500 ms-3">Complete documentation</span>-->
<!--        </li>-->
<!--        <li class="flex line-through decoration-gray-500">-->
<!--          <svg class="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">-->
<!--            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>-->
<!--          </svg>-->
<!--          <span class="text-base font-normal leading-tight text-gray-500 ms-3">24×7 phone & email support</span>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>-->
<!--    </div>-->

  </div>
</template>