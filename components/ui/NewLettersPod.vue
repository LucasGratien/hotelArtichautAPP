<script setup>

</script>

<template>
  <!-- Subscription Section -->
  <div class="bg-[var(--primary-color)] py-4 rounded text-center md:flex md:flex-row md:flex-nowrap  md:mx-8">
    <div class="md:w-2/3 flex items-center justify-center">
      <h2 class="text-[var(--secondary-color)]  md:pt-0 text-2xl md:text-4xl">
        Stay up to date about our latest offers
      </h2>
    </div>
    <div class="flex flex-col sm:flex-row md:flex-col md:w-1/3 justify-center p-2 items-center gap-4">
      <input
          type="email"
          placeholder="Enter your email ..."
          class="bg-[var(--secondary-color)] placeholder:font-[Cardo] placeholder:text-[var(--primary-color)] md:w-1/2 py-2 rounded-md hover:bg-[#365132] text-center
              hover:scale-105 transition-transform duration-300 ease-in-out"/>
      <button
          class="bg-[var(--secondary-color)] text-[var(--primary-color)] md:w-1/2 py-2 rounded-md hover:bg-[#365132]
              hover:scale-105 transition-transform duration-300 ease-in-out">
        Subscribe to the Newsletter
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>