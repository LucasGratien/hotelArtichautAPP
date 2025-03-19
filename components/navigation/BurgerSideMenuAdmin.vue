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
          <ul>
            <li class="pb-6 text-[var(--primary-color)] rounded-md hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] bg-[var(--secondary-color)]"><NuxtLink to="/">Home</NuxtLink></li>
            <li class="pb-6 text-[var(--primary-color)] rounded-md hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] bg-[var(--secondary-color)]"><NuxtLink to="/Rooms">Rooms</NuxtLink></li>
            <li class="pb-6 text-[var(--primary-color)] rounded-md hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] bg-[var(--secondary-color)]">
              <NuxtLink to="/Restaurant">Restaurant</NuxtLink>
            </li>
            <li class="pb-6 text-[var(--primary-color)] rounded-md hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] bg-[var(--secondary-color)]"><NuxtLink to="/Spa">Spa</NuxtLink></li>
            <li class="pb-6 text-[var(--primary-color)] rounded-md hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] bg-[var(--secondary-color)]"><NuxtLink to="/Service">Services</NuxtLink></li>
            <li class="pb-6 text-[var(--primary-color)] rounded-md hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] bg-[var(--secondary-color)]"><NuxtLink to="/Booking">Booking</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </USlideover>
</template>

<style scoped></style>
