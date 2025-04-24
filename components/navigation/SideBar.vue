<template>
  <h1 class="font-bold text-[20px] text-[var(--primary-color)] text-center py-2">
    Admin Panel
  </h1>
  <div class="menu font-bold flex flex-col justify-between text-lg font-cardo">
    <ul class="ml-5 mr-5 divide-y divide-[var(--primary-color)]">
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/serviceadmin">
          <p>Services</p>
        </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/roomsadmin"> Rooms </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/contentadmin"> Contents </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/useradmin"> Clients </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/bookingadmin"> Réservations </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/staffadmin"> Staff </NuxtLink>
      </li>
      <li
        class="bg-[var(--primary-color)] mt-5 text-[var(--secondary-color)] text-center rounded-lg"
      >
        <NuxtLink to="/admin/dashboardadmin"> Stats </NuxtLink>
      </li>
    </ul>
  </div>
</template>

