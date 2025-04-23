<script setup lang="js">
const isOpen = ref(false);
</script>
<template>
  <div class="flex items-center justify-center p-2">
    <UButton
      label="Admin"
      @click="isOpen = true"
      class="text-[var(--secondary-color)] bg-[var(--primary-color)] hover:text-[var(--primary-color)] hover:bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] font-semibold rounded px-4 py-2"
    />
  </div>
  <USlideover v-model="isOpen">
    <div class="p-4 flex-1">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="flex sm:hidden absolute end-5 top-5 z-10"
        square
        padded
        @click="isOpen = false"
      />
      <div class="flex items-center justify-center max-h-[80vh] bg-gray-100">
        <div
          class="max-h-[80vh] text-center flex justify-between text-3xl font-cardo p-4 bg-white rounded-lg shadow-md"
        >
          <ul class="ml-5 mr-5 divide-y divide-[var(--primary-color)]">
            <li
                class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
            >
              <NuxtLink to="/admin/serviceadmin">
                <p>Services</p>
              </NuxtLink>
            </li>
            <li
                class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
            >
              <NuxtLink to="/admin/roomsadmin"> Rooms </NuxtLink>
            </li>
            <li
                class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
            >
              <NuxtLink to="/admin/contentadmin"> Contents </NuxtLink>
            </li>
            <li
                class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
            >
              <NuxtLink to="/admin/useradmin"> Clients </NuxtLink>
            </li>
            <li
                class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
            >
              <NuxtLink to="/admin/bookingadmin"> Réservations </NuxtLink>
            </li>
            <li
                class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
            >
              <NuxtLink to="/admin/staffadmin"> Staff </NuxtLink>
            </li>
            <li
                class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
            >
              <NuxtLink to="/admin/dashboardadmin"> Stats </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </USlideover>
</template>

<style scoped></style>
