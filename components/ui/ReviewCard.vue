<template>
  <UCard
      :ui="{
      ring: 'ring-green-900/50 dark:ring-green-900/50',
      divide: 'divide-green-900 dark:divide-green-900'
      }"
      class="review-card bg-[var(--secondary-color)] dark:bg-[var(--secondary-color)] m-2 flex flex-col">
    <template #header>
      <div class="flex items-center justify-between">
        <p class="font-semibold text-[var(--primary-color)] text-lg pr-2">{{ name }}</p>
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

    <p class="text-[var(--primary-color)] text-xs leading-snug">{{ description }}</p>

    <template #footer>
      <div class="flex items-center gap-3">
        <UAvatar
            :src="`https://api.dicebear.com/7.x/initials/svg?seed=${name}`"
            size="lg"
        />
        <div>
          <p class="font-medium text-[var(--primary-color)] ">{{ name }}</p>
          <p class="text-sm  text-green-950">Client vérifié</p>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup>
defineProps({
  rate: Number,
  name: String,
  description: String
});
</script>

<style scoped>
.review-card :deep( div:nth-child(2)) {
  height: 100%;
}
</style>