<script setup lang="ts">
const items = [
[{
    label: 'Français',
    icon: '🇫🇷​'
  }, {
    label: 'Anglais',
    icon: '🇬🇧​'
  }, {
    label: 'Italien',
    icon: '🇮🇹​'
  }]
]
</script>

<template>
  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UAvatar src="https://stickerapp.fr/cdn-assets/images/preview/2016/08/05/design-11220/template-sticker-300x300.png" />

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
  </UDropdown>
</template>