<template>
  <div class="flex flex-col items-center justify-center h-screen bg-green-100 text-center">
    <h1 class="text-3xl font-bold text-green-700 mb-4">✅ Paiement réussi</h1>
    <p class="text-lg text-green-800 mb-6">Merci pour votre commande !</p>
    <router-link to="/">
      <a :href="ksmUrl">
      <button class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Retour à l'accueil
      </button>
      </a>
    </router-link>
  </div>
</template>

<script setup>
  const ksmUrl = import.meta.env.KSM_URL
</script>
