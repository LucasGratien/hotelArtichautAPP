<template>
  <div class="hover:scale-105 transition-transform duration-300 ease-in-out relative w-full flex justify-center md:p-8">
    <div class="carousel-container relative overflow-hidden w-full md:w-2/5 max-h-1/2 aspect-square">
      <img
          :src="images[currentSlide]"
          alt="Restaurant Image"
          class="max-h-[300px] w-full  object-cover rounded-[10px]"
      />

      <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        <UButton
            icon="i-heroicons-chevron-left"
            variant="soft"
            :ui="{
            rounded: 'rounded-full',
            padding: 'p-2',
            background: 'bg-gray-100 hover:bg-gray-200',
            base: 'transition-all duration-300 hover:scale-110'
          }"
            @click="prevSlide"
        />

        <UButton
            icon="i-heroicons-chevron-right"
            variant="soft"
            :ui="{
            rounded: 'rounded-full',
            padding: 'p-2',
            background: 'bg-gray-100 hover:bg-gray-200',
            base: 'transition-all duration-300 hover:scale-110'
          }"
            @click="nextSlide"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  currentSlide: {
    type: Number,
    required: true
  },
  images: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['prev-slide', 'next-slide'])

const prevSlide = () => {
  emit('prev-slide')
}

const nextSlide = () => {
  emit('next-slide')
}
</script>