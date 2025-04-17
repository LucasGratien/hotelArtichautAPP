<script setup>
// Pagination et tableau
const currentPage = ref(1)
const itemsPerPage = 5
const totalItems = 15
// const totalPages = Math.ceil(totalItems / itemsPerPage)

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

<template>
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

</template>
