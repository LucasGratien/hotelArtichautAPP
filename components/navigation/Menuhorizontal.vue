<template>
  <ul class="Menu flex flex-row items-center justify-center gap-4 bg">
    <li>
      <NuxtLink to = "/" >Home</NuxtLink>
    </li>
    <li>
      <NuxtLink to = '/Rooms'>Rooms</NuxtLink>
    </li>
    <li>
      <NuxtLink to = '/Restaurant'>Restaurant</NuxtLink>
    </li>
    <li>
      <NuxtLink to = '/SPA'>SPA</NuxtLink>
    </li>
    <li>
      <NuxtLink to = '/Service'>Services</NuxtLink>
    </li>
    <li>
      <NuxtLink to = '/Reserver'><button>Booking</button></NuxtLink>
    </li>
  </ul>
</template>
<style>
.Menu li{
  color: rgba(234, 198, 132, 1);
font-family: Cardo, Serif;
  font-size: 20px;
  letter-spacing: 2px;
}
.Menu button {
  background-color: rgba(75, 101, 71, 1);
  color: white;
  border: 2px solid rgba(234, 198, 132, 1);
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.Menu li:hover {
  color: rgba(255, 255, 255, 1);
  transition: color 0.3s ease;
  transform: scale(1.1);
}

.Menu button:hover {
  background-color: rgba(234, 198, 132, 1);
  color: rgba(75, 101, 71, 1);
  transform: scale(1.1);
}

</style>
<script setup lang="ts">
</script>