<template>
  <ul class="menu flex flex-row items-center justify-center gap-4 bg">
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
      <NuxtLink to = '/Spa'>SPA</NuxtLink>
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
.menu li{
  color: rgba(234, 198, 132, 1);
font-family: Cardo, Serif;
  font-size: 20px;
  letter-spacing: 2px;
}
.menu button {
  background-color: rgba(75, 101, 71, 1);
  color: white;
  border: 2px solid rgba(234, 198, 132, 1);
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.menu li:hover {
  color: rgba(255, 255, 255, 1);
  transition: color 0.3s ease;
  transform: scale(1.1);
}

.menu button:hover {
  background-color: rgba(234, 198, 132, 1);
  color: rgba(75, 101, 71, 1);
  transform: scale(1.1);
}

</style>
