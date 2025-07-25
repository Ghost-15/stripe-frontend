<template>
  <div class="flex flex-col items-center justify-center h-screen bg-red-100 text-center">
    <h1 class="text-3xl font-bold text-red-700 mb-4">❌ Paiement annulé</h1>
    <p class="text-lg text-red-800 mb-6">Votre commande n’a pas été finalisée.</p>
    <a :href="ksmUrl">
      <button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
        Retour à l'accueil
      </button>
    </a>
  </div>
</template>

<script setup>
  const ksmUrl = import.meta.env.KSM_URL
</script>
