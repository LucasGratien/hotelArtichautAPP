<script setup>

</script>

<template>
  <!-- Site Information -->
  <div class="bg-[var(--background-color)] md:flex md:flex-row  w-full text-center pt-8 pb-2">
    <!--texte info-->
    <UiTextInfoFooter/>
    <UiSeparator/>
    <!--help menu-->
    <div class="hidden md:block md:w-3/4 ">
      <div class="grid grid-cols-4 sm:grid-cols-4 gap-4 px-8 text-[var(--black-color)] text-start text-lg font-lora">
        <div>
          <h6 class="text-[var(--secondary-color)] text-xl ">COMPANY</h6>
          <p class="text-[var(--black-color)] leading-loose pt-4">
            About <br/>
            Features <br/>
            Works <br/>
            Carrer
          </p>
        </div>
        <div>
          <h6 class="text-[var(--secondary-color)] text-xl">HELP</h6>
          <p class="text-[var(--black-color)] leading-loose pt-4">
            Customer Support <br/>
            Delivery Details <br/>
            Terms & Conditions <br/>
            Privacy Policy
          </p>
        </div>
        <div>
          <h6 class="text-[var(--secondary-color)] text-xl">FAQ</h6>
          <p class="text-[var(--black-color)] leading-loose pt-4">
            Account <br/>
            Manage Deliveries <br/>
            Orders <br/>
            Payments
          </p>
        </div>
        <div>
          <h6 class="text-[var(--secondary-color)] text-xl">RESSOURCES</h6>
          <p class="text-[var(--black-color)] leading-loose pt-4">
            Free eBooks <br/>
            How to - Blog <br/>
            Development Tutorial <br/>
            Youtube Playlist
          </p>
        </div>
      </div>
    </div>
    <!--navigation links-->
    <div class="md:hidden py-4">
      <h3 class="text-[var(--secondary-color)] text-3xl ">Plan du site</h3>
      <div class="grid grid-cols-3 sm:grid-cols-3 gap-4 text-[var(--black-color)] pt-6 text-lg ">
        <nuxtLink to="/">Home</nuxtLink>
        <nuxtLink to="/Rooms">Rooms</nuxtLink>
        <nuxtLink to="/Restaurant">Restaurant</nuxtLink>
        <NuxtLink to='/Service'>Services</NuxtLink>
        <NuxtLink to='/Spa'>SPA</NuxtLink>
        <NuxtLink to='/Booking'>
          <button>Booking</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>

</style>