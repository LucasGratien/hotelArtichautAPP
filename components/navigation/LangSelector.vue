<script setup lang="js">
import { useLanguageStore } from '@/stores/languageStore.js'
import { computed } from 'vue'

const languageStore = useLanguageStore()
const { $language } = useNuxtApp()


const activeLanguage = computed(() => {
  return $language.languages.find(lang => lang.id === languageStore.id) || $language.languages[0]
})


const dropdownItems = computed(() => {
  return [$language.languages.map(lang => ({
    ...lang,
    label: lang.lang,
  }))]
})



const changeLanguage = (item) => {
  console.log("Changing language to:", item.id)
  languageStore.setLanguage(item.id)
}
</script>

<template>
  <UDropdown
      :items="dropdownItems"
      :popper="{ placement: 'bottom-start' }"
      @select="changeLanguage"
  >
    <UAvatar
        :src="activeLanguage?.image?.url || 'https://stickerapp.fr/cdn-assets/images/preview/2016/08/05/design-11220/template-sticker-300x300.png'"
    />
    <template #item="{ item }">
      <span class="truncate" @click="changeLanguage($language.languages.id)" >{{ item.label }}</span>
      <img
          v-if="item.image?.url"
          :src="item.image.url"
          class="flex-shrink-0 h-4 w-4 ms-auto"
          alt=""
      />
    </template>
  </UDropdown>
</template>