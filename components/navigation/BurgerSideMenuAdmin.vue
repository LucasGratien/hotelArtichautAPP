<script setup lang="js">
const isOpen = ref(false)
</script>
<template>
  <div class="flex items-center justify-center p-2">
    <UButton label="Admin" @click="isOpen = true"
             class="bg-[#4B6547] text-white border-2 border-[#EAC684] rounded px-4 py-2"/>
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
        <div class="max-h-[80vh] text-[#eac684] text-center text-3xl font-cardo p-4 bg-white rounded-lg shadow-md">
          <ul>
            <li class="pb-6"><NuxtLink to = '/'>Home</NuxtLink></li>
            <li class="pb-6"><NuxtLink to = '/Rooms'>Rooms</NuxtLink></li>
            <li class="pb-6"><<NuxtLink to = '/Restaurant'>Restaurant</NuxtLink></li>
            <li class="pb-6"><NuxtLink to = '/Spa'>Spa</NuxtLink></li>
            <li class="pb-6"><NuxtLink to = '/Service'>Services</NuxtLink></li>
            <li class="pb-6"><NuxtLink to = '/Booking'>Booking</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </USlideover>
</template>

<style scoped>

</style>