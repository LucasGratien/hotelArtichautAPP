<template>
  <div class="menu flex space-x-5">
    <!-- Dropdown Service -->
    <button class="px-3 py-2 z-10 h-[50px]">
      <UiAdminButton/>
    </button>
    <button class="px-3 py-2 z-10 h-[50px]">
      <NavigationLangSelector/>
    </button>
    <button class="px-3 py-2 z-10 h-[50px]">
      <UiAuthAction/>
    </button>
    <button
        class="text-[var(--primary-color)] text-[20px] border-[var(--primary-color)] border-[3px] font-bold hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)] rounded-md px-4 py-2 h-[50px]"
    >
      <NuxtLink to="/Rooms"><p>Rooms</p></NuxtLink>
    </button>

    <div ref="dropdownService" class="relative inline-block text-center">
      <button
          @click="toggleDropdown('service')"
          class="bg-[var(--secondary-color)] font-bold text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] px-4 py-2 h-[50px] rounded-md border-[3px] border-[var(--primary-color)] focus:outline-none text-[20px]"
      >
        <p>Service</p>
      </button>
      <div
          v-if="openDropdown === 'service'"
          class="absolute mt-2 left-1/2 transform -translate-x-1/2 w-48 bg-white z-10 border-[var(--secondary-color)] border-[2px] rounded-md shadow-lg"
      >
        <ul class="ml-5 mr-5 divide-y divide-[var(--primary-color)]">
          <li>
            <NuxtLink
                to="/Restaurant"
                class="block px-4 py-2 text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            >
              <p>Restaurant</p>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/Spa"
                class="block px-4 py-2 text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            >
              <p>SPA</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <!-- Dropdown À propos -->
    <div ref="dropdownAPropos" class="relative inline-block text-center">
      <button
          @click="toggleDropdown('apropos')"
          class="bg-[var(--secondary-color)] font-bold text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] rounded-md px-4 py-2 w-full border-[3px] border-[var(--primary-color)] text-[20px] focus:outline-none h-[50px]"
      >
        <p>À propos</p>
      </button>
      <div
          v-if="openDropdown === 'apropos'"
          class="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 border rounded-md bg-white z-10 shadow-lg"
      >
        <ul class="ml-5 mr-5 divide-y divide-[var(--primary-color)]">
          <li>
            <NuxtLink
                to="/Hotel"
                class="block px-4 py-2 text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            >
              <p>Notre Hotel</p>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
                to="/Equipe"
                class="block px-4 py-2 text-[var(--secondary-color)] hover:text-[var(--primary-color)]"
            >
              <p>Notre Équipe</p>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>

    <button
        class="booking-button rounded-md border-[3px] border-[var(--primary-color)] font-bold text-[20px] px-4 py-2 h-[50px]"
    >
      <NuxtLink to="/Booking"><p>Booking</p></NuxtLink>
    </button>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from "vue";

const openDropdown = ref(null);
const dropdownService = ref(null);
const dropdownAPropos = ref(null);

// Fonction pour ouvrir/fermer un dropdown
const toggleDropdown = (menu) => {
  openDropdown.value = openDropdown.value === menu ? null : menu;
};

// Fermer le dropdown si on clique en dehors
const closeDropdown = (event) => {
  if (
      openDropdown.value &&
      dropdownService.value &&
      dropdownAPropos.value &&
      !dropdownService.value.contains(event.target) &&
      !dropdownAPropos.value.contains(event.target)
  ) {
    openDropdown.value = null;
  }
};
onMounted(() => {
  document.addEventListener("click", closeDropdown);
});
onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});
</script>

<style scoped>
.menu button {
  cursor: pointer;
  transition: background-color 0.3s ease,
  transform 0.2s ease;
}

.menu li:hover {
  transition: color 0.3s ease;
  transform: scale(1.1);
}

.menu button:hover {
  transform: scale(1.1);
}

.menu button.booking-button {
  background-color: rgba(255, 255, 255, 0.24);
  color: var(--background-color);
  cursor: pointer;
}

.menu button.booking-button:hover {
  color: var(--secondary-color);
  background-color: var(--primary-color);
  transform: scale(1.05);
}
</style>
<script setup lang="ts">
</script>