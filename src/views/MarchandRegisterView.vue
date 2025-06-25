<script setup>
import axios from '../stores/useAxios.js';
import { ref } from 'vue';

const first_name = ref('');
const last_name = ref('');
const username = ref('');
const password = ref('');

const nomDeSociete = ref('');
const adresse = ref('');
const numeroSiren = ref('');
const code = ref('');
const kbis = ref(null);

const loading = ref(false);
const errMsg = ref('');
const succMsg = ref('');
const refEl = ref(null);

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file && file.type === 'application/pdf') {
    kbis.value = file;
    errMsg.value = '';
  } else {
    kbis.value = null;
    errMsg.value = 'Veuillez sélectionner un fichier PDF uniquement.';
    event.target.value = '';
  }
};

const handleSubmit = async () => {
  loading.value = true;
  errMsg.value = '';
  succMsg.value = '';

  if (!kbis.value) {
    errMsg.value = 'Veuillez sélectionner un fichier PDF.';
    loading.value = false;
    return;
  }

  try {
    const formData = new FormData();
    formData.append('first_name', first_name.value);
    formData.append('last_name', last_name.value);
    formData.append('username', username.value);
    formData.append('password', password.value);

    formData.append('nomDeSociete', nomDeSociete.value);
    formData.append('adresse', adresse.value);
    formData.append('numeroSiren', numeroSiren.value);
    formData.append('code', code.value);
    formData.append('kbis', kbis.value);

    const response = await axios.post('/marchand', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });

    if (response?.status === 201) {
      first_name.value = '';
      last_name.value = '';
      username.value = '';
      password.value = '';
      nomDeSociete.value = '';
      adresse.value = '';
      numeroSiren.value = '';
      code.value = '';
      kbis.value = '';

      succMsg.value = "Nouveau utilisateur ajouté. Un mail a été envoyé à l'adresse email recueillie.";
    }
  } catch (err) {
    if (!err?.response) {
      errMsg.value = 'La requête a échoué.';
    } else if (err.response?.status === 400) {
      errMsg.value = 'Données invalides.';
    } else {
      errMsg.value = 'Erreur lors de la soumission.';
    }
    refEl.value?.focus();
  } finally {
    loading.value = false;
  }
};
</script>



<template>
  <div class="flex-1 py-10 px-4 sm:px-10">
    <div class="mt-20 sm:mx-auto ">
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Compte Marchand</h2>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <p ref="refEl" class="text-green-600 text-center" aria-live="assertive">{{ succMsg }}</p>
      <p ref="refEl" class="text-red-600 text-center" aria-live="assertive">{{ errMsg }}</p>
      <form @submit.prevent="handleSubmit" class="space-y-6">

        <div class="grid grid-cols-2 gap-16">
          <div>
            <div>
              <label for="First name" class="block text-sm font-medium leading-6 text-gray-900">
                Prénom</label>
              <div class="mt-2">
                <input
                    type="text"
                    placeholder="Enter votre prénom"
                    v-model="first_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
              </div>
            </div>

            <div>
              <label for="Last name" class="block text-sm font-medium leading-6 text-gray-900">
                Nom</label>
              <div class="mt-2">
                <input
                    type="text"
                    placeholder="Enter votre nom"
                    v-model="last_name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
              </div>
            </div>

            <div>
              <label for="Username" class="block text-sm font-medium leading-6 text-gray-900">
                Email</label>
              <div class="mt-2">
                <input
                    type="email"
                    v-model="username"
                    placeholder="Enter votre username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
              </div>
            </div>

            <div>
              <label for="Password" class="block text-sm font-medium leading-6 text-gray-900">
                Password</label>
              <div class="mt-2">
                <input
                    type="password"
                    v-model="password"
                    placeholder="Enter votre mot de passe"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
              </div>
            </div>

          </div>

<!---->

          <div>
            <div>
              <label for="Nom De la Société" class="block text-sm font-medium leading-6 text-gray-900">
                Nom De la Société</label>
              <div class="mt-2">
                <input
                    type="text"
                    placeholder="Enter le nom de la Société"
                    v-model="nomDeSociete"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
              </div>
            </div>

            <div>
              <label for="Adresse du siège social" class="block text-sm font-medium leading-6 text-gray-900">
                Adresse du siège social</label>
              <div class="mt-2">
                <input
                    type="text"
                    v-model="adresse"
                    placeholder="Enter votre Adresse du siège social"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
              </div>
            </div>

            <div>
              <label for="Numéro SIREN" class="block text-sm font-medium leading-6 text-gray-900">
                Numéro SIREN</label>
              <div class="mt-2">
                <input
                    type="number"
                    placeholder="Enter le numéro siren"
                    v-model="numeroSiren"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
              </div>
            </div>

            <div>
              <label for="Code NAF / APE" class="block text-sm font-medium leading-6 text-gray-900">
                Code NAF / APE</label>
              <div class="mt-2">
                <input
                    type="number"
                    v-model="code"
                    placeholder="Enter votre Code NAF / APE"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-900" for="file_input">Upload KBIS file</label>
              <div class="mt-2">
                <input
                  type="file"
                  @change="handleFileChange"
                  accept="application/pdf"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  aria-describedby="file_input_help"
                  required>
              </div>
            </div>

          </div>
        </div>



        <div>
          <button
              v-if="!loading"
              id="Submit"
              type="submit"
              class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Soumettre
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
            Chargement...
          </button>
        </div>

      </form>
    </div>
  </div>
</template>
