<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="grid grid-cols-4 gap-8">


      <!-- Colonne principale avec les deux premières cards -->
      <div class="col-span-3 space-y-8">


<!-- UserInfoAdmin-->
        <!-- Première card avec bouton jaune et champs de texte -->
        <div class="bg-white rounded-lg shadow-md p-8 relative">
          <!-- Bouton en haut à droite -->
          <button class="absolute top-4 right-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
            Modifier
          </button>

          <!-- Champs de texte alignés -->
          <div class="mb-8 grid grid-cols-2 gap-4">
            <p class="p-2  rounded-md flex-1 font-semibold ">Infos Personnelles</p>
            <div
                v-for="(value, key) in userInfo"
                :key="key"
                class="flex items-center space-x-2 col-span-2"
            >

              <label class="text-sm font-medium text-gray-700 w-24">{{ labels[key] }} :</label>
              <p class="p-2  rounded-md flex-1">{{ value }}</p>
            </div>
          </div>
        </div>

<!-- UserBookingHistory-->
        <!-- Deuxième card avec tableau et pagination -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <UTable
              :rows="currentItems"
              :columns="columns"
              :loading="false"
          >
            <!-- Optionnel : Personnaliser l'affichage d'une colonne -->
            <template #detail-data="{ row }">
              <UButton
                  variant="ghost"
                  color="blue"
                  @click="showDetails(row)"
              >
                {{ row.detail }}
              </UButton>
            </template>
          </UTable>

          <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
            <UPagination v-model="currentPage" :page-count="itemsPerPage" :total="totalItems"/>
          </div>
        </div>
      </div>

<!-- UserReviewPref-->
      <!-- Colonne de droite avec la troisième card verticale -->
      <div class="col-span-1">
        <div class="bg-white rounded-lg shadow-md p-8 h-full">
          <div class="space-y-6">
            <div  class="bg-gray-100 p-4 rounded-lg">

              <p>{{ verticalCard.title }}</p>
              <p>{{ verticalCard.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref, computed } from 'vue'

// Pagination et tableau
const currentPage = ref(1)
const itemsPerPage = 5
const totalItems = 15
const totalPages = Math.ceil(totalItems / itemsPerPage)

const verticalCard = {
  title: "bonjour",
  content: "bonsoir",
}

const columns = [
  {
    key: 'numero',
    label: 'Numéro',
  },
  {
    key: 'dateArrivee',
    label: 'Date d\'arrivée',
  },
  {
    key: 'dateDepart',
    label: 'Date de départ',
  },
  {
    key: 'chambre',
    label: 'Chambre',
  },
  {
    key: 'detail',
    label: 'Détail',
  }
]

// Données réactives
const userInfo = ref({
  nom: 'Dupont',
  prenom: 'Jean',
  adresse: '123 Rue de l\'Exemple, Paris',
  ville: 'St-Mariette',
  codePostal: '74650',
  identifiant: '#15269854',
  membreDepuis: '01/01/2019',
  dateNaissance: '25/01/2002',
});

// Labels pour les champs
const labels = {
  nom: 'Nom',
  prenom: 'Prénom',
  adresse: 'Adresse',
  ville: 'Ville',
  codePostal: 'Code postal',
  identifiant: 'Identifiant',
  membreDepuis: 'Membre depuis',
  dateNaissance: 'Date de naissance',
};

const tableData = Array.from({ length: totalItems }, (_, i) => ({
  numero: i + 1,
  dateArrivee: new Date(Date.now() + i * 24 * 60 * 60 * 1000).toLocaleDateString(),
  dateDepart: new Date(Date.now() + (i + 3) * 24 * 60 * 60 * 1000).toLocaleDateString(),
  chambre: `Chambre ${Math.floor(Math.random() * 100) + 1}`,
  detail: 'Voir détails',
}))

const currentItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return tableData.slice(start, start + itemsPerPage)
})

const showDetails = (row) => {
  console.log('Détails de la réservation :', row)
}
</script>