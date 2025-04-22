<template>
<!--  zone de fond -->
  <div class=" md:p-8">
<!--    ensemble des trois cards-->
    <div class="flex flex-col md:grid md:grid-cols-4 gap-8">
      <!-- Colonne principale avec les deux premières cards -->
      <div class="col-span-3 space-y-8">

        <!-- UserInfoAdmin-->
        <AdminUserInfoDash
            :lastname="userInfos?.lastname"
            :firstname="userInfos?.firstname"
            :address="userInfos?.address"
            :city="userInfos?.city"
            :postal_code="userInfos?.postal_code"
            :id="userInfos?.id"
            :email="userInfos?.email"
            :created_at="userInfos?.created_at"
            :phone="userInfos?.phone"
            :images="userInfos.images && userInfos.images.length > 0 ? userInfos.images[0].url : ''"
        />


<!-- UserBookingHistory-->

        <!-- Deuxième card avec tableau et pagination -->
        <div class="bg-white text-black rounded-lg shadow-md p-8">
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
import {useAuthStore} from "~/stores/auth.js";

const authStore = useAuthStore();
const userInfos = computed(() => authStore.user);


// Pagination et tableau
const currentPage = ref(1)
const itemsPerPage = 5
const totalItems = 15
// const totalPages = Math.ceil(totalItems / itemsPerPage)

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