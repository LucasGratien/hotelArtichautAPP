<template>
  <footer class="pt-8 w-full">
    <div class="bg-[#4B6547] w-full py-8">
      <div class="max-w-7xl mx-auto">
        <div class="bg-[#EAC684] rounded-lg p-6">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-center md:text-left">
              <h3 class="text-[#4B6547] font-serif text-xl font-light">
                STAY UP TO DATE ABOUT OUR LATEST OFFERS
              </h3>
            </div>
            <div class="flex flex-col sm:flex-row gap-3">
              <UInput
                  placeholder="Enter your email address"
                  type="email"
                  size="lg"
                  class="bg-[#4B6547] w-full sm:w-64"
                  color="bg-[#4B6547]"
              />
              <UButton
                  size="lg"
                  color="bg-[#4B6547]"
                  variant="solid"
                  class="bg-[#4B6547] text-[#EAC684] flex items-center justify-center"
              >
                Subscribe to Newsletter
              </UButton>
            </div>
          </div>
        </div>

        <div class="container-info mt-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vous pouvez ajouter ici le contenu de container-info-picto et container-info-rows */}
          </div>
        </div>
      </div>
    </div>
  </footer>
<!--  #4B6547 - Primary-->
<!--  #EAC684 - Secondary-->
</template>


<script setup>



</script>
<!--  #4B6547 - Primary-->
<!--  #EAC684 - Secondary-->

<style scoped>

</style>