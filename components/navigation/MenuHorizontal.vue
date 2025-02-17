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
  color:var(--primary-color);
font-family: Cardo,serif;
  font-size: 25px;
  letter-spacing: 2px;
}
.menu button {
  background-color: var(--secondary-color);
  color: var(--background-color);
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  padding: 5px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}
.menu li:hover {
  color: var(--background-color);
  transition: color 0.3s ease;
  transform: scale(1.1);
}

.menu button:hover {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  transform: scale(1.1);
}

</style>
