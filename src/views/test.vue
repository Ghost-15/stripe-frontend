<template>
  <div class="app">
    <h1>Paiement Vue + Socket.IO</h1>
    <input v-model="userId" placeholder="Votre ID utilisateur" />
    <input v-model.number="amount" placeholder="Montant" type="number" />
    <button @click="launchPayment">Lancer le paiement</button>

    <p>Status : {{ status }}</p>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { io } from "socket.io-client"
import axios from 'axios'

const userId = ref('')
const amount = ref(10)
const status = ref('attente')
const message = ref('')

const socket = io("http://localhost:3000")

onMounted(() => {
  socket.on("connect", () => {
    console.log("Socket connecté :", socket.id)

    if (userId.value) {
      socket.emit("join_user", userId.value)
    }
  })

  watch(userId, (newId) => {
    socket.emit("join_user", newId)
  })

  socket.on("payment_status", (data) => {
    if (data.userId === userId.value) {
      status.value = data.status
      message.value = data.message
    }
  })
})

const launchPayment = async () => {
  status.value = "en cours..."
  message.value = ""

  try {
    const res = await axios.post("http://localhost:3000/pay", {
      userId: userId.value,
      amount: amount.value
    })
    status.value = res.data.status
    message.value = res.data.message
  } catch (err) {
    status.value = "erreur"
    message.value = "Erreur de paiement"
  }
}
</script>

<style>
.app {
  padding: 2rem;
  font-family: sans-serif;
}
input {
  display: block;
  margin: 10px 0;
  padding: 0.5rem;
}
</style>
