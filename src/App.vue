<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite()
})
</script>

<template>

  <div class="flex min-h-screen">
  <RouterView />
  </div>

</template>

