<script setup>
// import du store et méthodes de vue // router pour la redirection après l'enregistrement
import {useAuthStore} from '~/stores/auth';
import {ref, reactive} from 'vue';

//injection du store
const authStore = useAuthStore();
//gestion de la modale
const isOpenRegister = defineModel();

//initialisation des credentials
const credentials = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  address: '',
  city: '',
  postal_code: '',
  phone: '',
  image: '',
  is_pro: false
});

//variables d'état
const errorMsg = ref('');
const pending = ref(false);

//vérification des password et de l'état de la requête d'inscription,
// si la requête est ok message confirmation et
// fermeture modale

const register = async () => {
  //vérification des password identiques
  if (credentials.password !== credentials.confirmPassword) {
    errorMsg.value = "Les mots de passe ne correspondent pas.";
    return;
  }
  //gestion de l'état de la requête // en cours= vrai et errorMsg. est initialisé
  pending.value = true;
  errorMsg.value = '';
  // Vérif' des crédentials avant d'être Formaté
  console.log('Body envoyé :', credentials);

  try {
    //On instancie un nouveau formData pour gérer l'état de la donnée rentrée par l'utilisateur avant de l'envoyer à l'Api
    // FormData est un objet natif JavaScript utilisé pour construire des paires clé/valeur représentant les champs d’un
    // formulaire, afin de les envoyer facilement via une requête HTTP (généralement POST) — notamment quand tu veux
    // envoyer des fichiers (ex: images) en plus de simples données texte.
    const formData = new FormData();
  // ici je parcours chaque clé valeur des données entrées par l'utilisateur
    // et à chaque fois je vais utiliser la méthode append pour associer les données dans le même formData
    for (const key in credentials) {
      // Si c’est l’image, on skip si vide
      if (key === 'image') {
        if (credentials.image instanceof File) {
          formData.append('image', credentials.image);
          console.log('Image appendée ?', formData.get('image'));
        }
        continue;
      }

      // is_pro est un booléen : on le convertit en string
      if (key === 'is_pro') {
        formData.append(key, credentials[key] ? '1' : '0');
      } else {
        // pour toutes les autres valeurs je les intègre dans le formData
        formData.append(key, credentials[key]);
      }
    }
    //Les consoles.log permettent le contrôle de l'état de la donnée avant le fetch
    console.log('FormData FINAL :');
    for (let [k, v] of formData.entries()) {
      console.log(k, v);
    }
    console.log('FormData envoyé :');
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    console.log('Body envoyé :', formData);

    //appel de la fonction register du store afin de charger les données rentrée par l'utilisateur.
    // await authStore.register (formData);

    const response = await authStore.register(formData);

    if (response?.status === 'success') {
      //message (temporaire de bienvenue)
      alert(`Compte créé avec succès, bienvenue ${credentials.firstname} ${credentials.lastname}, vous pouvez vous login !`);
      // Fermer la modale après une inscription réussie
      isOpenRegister.value = false;
      // reset des champs
      Object.assign(credentials, {
        email: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        postal_code: '',
        phone: '',
        is_pro: false
      });
    } else {
      errorMsg.value = response?.message;
    }
  } catch (error) {
    console.error("Erreur d'inscription :", error);
    errorMsg.value = "Une erreur est survenue lors de l'inscription.";
  } finally {
    pending.value = false;
  }
};
//Ta fonction handleFileUpload sert à gérer l’upload de fichier (typiquement une image) lorsque l’utilisateur
// choisit un fichier depuis un champ <input type="file">
const handleFileUpload = (event) => {
  const file = event?.target?.files?.[0] || event?.target?.input?.files?.[0];
  if (file) {
    credentials.image = file;
    console.log('Fichier sélectionné :', file);
  } else {
    console.warn('Aucun fichier sélectionné');
  }
  console.log('Événement upload :', event);
};
</script>

<template>

<!--  lancement de la modale -->
  <UModal v-model="isOpenRegister" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
<!--      header de la modale-->
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Inscription
          </h3>
<!--          bouton de fermeture de modale-->
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                   @click="isOpenRegister = false"/>
        </div>
      </template>
      <section>
<!--        tableau d'insertion des renseignements d'enregistrement-->
        <form @submit.prevent="register">
          <p class="text-red-500" v-if="errorMsg">{{ errorMsg }}</p>
          <UInput v-model="credentials.email" type="email" placeholder="Email" class="mb-2"/>
          <UInput v-model="credentials.password" type="password" placeholder="Mot de passe" class="mb-2"/>
          <UInput v-model="credentials.confirmPassword" type="password" placeholder="Confirmer le mot de passe" class="mb-2"/>
          <UInput v-model="credentials.firstname" type="text" placeholder="Nom" class="mb-4"/>
          <UInput v-model="credentials.lastname" type="text" placeholder="Prenom" class="mb-4"/>
          <UInput v-model="credentials.address" type="text" placeholder="Adresse" class="mb-4"/>
          <UInput v-model="credentials.city" type="text" placeholder="Ville" class="mb-4"/>
          <UInput v-model="credentials.postal_code" type="text" placeholder="Code Postale" class="mb-4"/>
          <UInput v-model="credentials.phone" type="text" placeholder="Telephone" class="mb-4"/>
<!--          <UInput v-model="credentials.image" type="file" class="mb-4"/>-->
<!--          <UInput type="file" class="mb-4" @change="handleFileUpload" />-->
          <input type="file" class="mb-4" @change="handleFileUpload" />

<!--          sur cet input ce serai mieux un selector (a avoir pour plus tard)-->
          <UInput v-model="credentials.is_pro" type="text" placeholder="Professionnel ? True ou False" class="mb-4"/>

<!--          bouton de validation-->
          <UButton color="gray" variant="ghost" type="submit" :disabled="pending" class="w-full">
            {{ pending ? 'Inscription...' : "S'inscrire" }}
          </UButton>

        </form>
      </section>
    </UCard>
  </UModal>
</template>