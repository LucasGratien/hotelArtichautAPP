<template>
  <UCard
      class="review-card bg-[#4B6547] h-full flex flex-col">
    <template #header>
      <div class="flex items-center justify-between">
        <p class="font-semibold font-lora text-lg pr-2">{{ name }}</p>
        <div class="flex gap-1">
          <UIcon
              v-for="star in 5"
              :key="star"
              :name="star <= rate ? 'i-heroicons-star-solid' : 'i-heroicons-star'"
              class="text-amber-400"
          />
        </div>
      </div>
    </template>

      <p class="text-[#eac684] text-base leading-snug font-lora">{{ description }}</p>

    <template #footer>
      <div class="flex items-center gap-3">
        <UAvatar
            :src="`https://api.dicebear.com/7.x/initials/svg?seed=${name}`"
            size="lg"
        />
        <div>
          <p class="font-medium text-[#eac684] font-lora">{{ name }}</p>
          <p class="text-sm font-lora text-[#4B6547] ">Client vérifié</p>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
defineProps<{
  rate: number
  name: string
  description: string
}>()
</script>

<style scoped>
.review-card :deep( div:nth-child(2)) {
  height : 100%;
}
.font-lora {
  font-family: 'Lora', serif;
}
</style>