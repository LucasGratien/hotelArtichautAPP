<template>
  <div class="mt-20">
    <div>
      <h1 class=" text-3xl text-[var(--secondary-color)] text-center">{{ title }}</h1>
      <p class="text-xl text-[var(--secondary-color)] text-center py-4 md:px-48">
        {{description}}
      </p>
      <UiCarousel
          :current-slide="currentSlide"
          :images="images"
          @prev-slide="prevSlide"
          @next-slide="nextSlide"
      />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    description: String,
    images: Array,
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide =
          (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
  },
};

</script>

