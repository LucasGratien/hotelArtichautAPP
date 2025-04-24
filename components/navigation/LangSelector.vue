<script setup>
import { computed } from "vue";
import { useHotelStore } from "@/stores/hotel.js";

const hotelStore = useHotelStore();
const activeLanguage = computed(() => hotelStore.currentLang);

const changeLanguage = (item) => {
  console.log("Changement de langue :", item.id);
  hotelStore.changeLanguage(item.id);
};
</script>

<template>
  <UDropdown
    :items="[$hotel.langSelector]"
    :popper="{ placement: 'bottom-start', strategy: 'absolute' }"
    :persistent="true"
  >
    <UAvatar
      :src="
        activeLanguage?.image?.url ||
        'https://stickerapp.fr/cdn-assets/images/preview/2016/08/05/design-11220/template-sticker-300x300.png'
      "
    />

    <template #item="{ item }">
      <span
        class="truncate text-[var(--primary-color)]"
        @click="changeLanguage(item)"
      >
        {{ item.lang }}
      </span>
      <img
        v-if="item.image?.url"
        :src="item.image.url"
        class="flex-shrink-0 h-4 w-4 ms-auto"
        alt=""
      />
    </template>
  </UDropdown>
</template>
