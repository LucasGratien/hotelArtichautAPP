<script setup lang="ts">
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
            <li class="pb-6"><a href="/">Services</a></li>
            <li class="pb-6"><a href="/Rooms">Rooms</a></li>
            <li class="pb-6"><a href="/Restaurant">Content</a></li>
            <li class="pb-6"><a href="/Spa">Client</a></li>
            <li class="pb-6"><a href="/Service">Reservation</a></li>
            <li class="pb-6"><a href="/Service">Staff</a></li>
            <li class="pb-6"><a href="/Service">Statistiques</a></li>
          </ul>
        </div>
      </div>
    </div>
  </USlideover>
</template>

<style scoped>

</style>