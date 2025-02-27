<template>
  <ul class="menu flex flex-row items-center justify-center gap-4 bg">
<!--    <NavigationLangSelector/>-->
    <UiAuthAction/>
    <li>
      <NuxtLink to = "/" >home</NuxtLink>
    </li>
    <li>
      <NuxtLink to = '/Rooms'>rooms</NuxtLink>
    </li>
    <li>
      <NuxtLink to = '/Restaurant'>restaurant</NuxtLink>
    </li>
    <li>
      <NuxtLink to = '/Spa'>spa</NuxtLink>
    </li>
    <li>
      <NuxtLink to = '/Service'>services</NuxtLink>
    </li>
    <li>
      <nuxtLink to = '/Equipe'>equipe</nuxtLink>
    </li>
    <li>
      <NuxtLink to = '/Booking'><button>Booking</button></NuxtLink>
    </li>
  </ul>
</template>
<style>
.menu li{
  color:var(--primary-color);
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
