<template>
  <h1 class="font-bold text-[20px] text-[var(--primary-color)] text-center">
    Admin Panel
  </h1>
  <div class="menu font-bold flex flex-col justify-between text-lg font-cardo">
    <ul class="ml-5 mr-5 divide-y divide-[var(--primary-color)]">
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/Services">
          <p>Services</p>
        </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/Rooms"> Rooms </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/Contents"> Contents </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/CLients"> Clients </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/Réservations"> Réservations </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/Staff"> Staff </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/Stats"> Stats </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="js"></script>
