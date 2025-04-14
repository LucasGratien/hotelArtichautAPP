<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useServiceStore } from "@/stores/service.js";
import { useHotelStore } from "~/stores/hotel.js";
import { useAuthStore } from "~/stores/auth";
import LoginModal from "~/components/form/LoginModal.vue";

const route = useRoute();
const router = useRouter();
const serviceStore = useServiceStore();
const hotelStore = useHotelStore();
const authStore = useAuthStore();

const selectedServices = ref([]);
const prixTotal = ref(0);
const isLoginModalOpen = ref(false);

onMounted(async () => {
  await serviceStore.fetchServices();

  const chambre = hotelStore.rooms.find((room) => room.id === route.params.id);
  if (chambre) {
    prixTotal.value = (chambre.category?.price_in_cent ?? 0) / 100;
  } else {
    console.error("❌ Chambre non trouvée !");
  }
});

const toggleService = (service) => {
  if (selectedServices.value.includes(service.id)) {
    selectedServices.value = selectedServices.value.filter(
      (id) => id !== service.id,
    );
    prixTotal.value = Math.max(
      0,
      prixTotal.value - service.price_in_cent / 100,
    );
  } else {
    selectedServices.value.push(service.id);
    prixTotal.value += service.price_in_cent / 100;
  }
};

const continuer = () => {
  if (!authStore.isLoggedIn) {
    isLoginModalOpen.value = true;
  } else {
    router.push({
      path: "/reservation/formulaire",
      query: {
        chambre: route.params.id,
        services: selectedServices.value.join(","),
        prix: prixTotal.value,
      },
    });
  }
};
</script>

<template>
  <div
    class="p-5 mt-5 mr-20 ml-20 shadow-xl text-[var(--primary-color)] bg-[var(--secondary-color)] border-[2px] rounded-lg border-[var(--primary-color)] cursor-pointer"
  >
    <h1 class="text-xl font-bold underline flex justify-center">
      Services supplémentaires
    </h1>
    <p class="font-semibold mt-2 flex justify-center">
      Chambre :
      {{ hotelStore.rooms.find((room) => room.id === route.params.id)?.name }} -
      {{ prixTotal }}€
    </p>

    <div
      class="mt-2 flex justify-center"
      v-for="service in serviceStore.services"
      :key="service.id"
    >
      <input
        type="checkbox"
        :value="service.id"
        @change="toggleService(service)"
      />
      {{ service.title }} - {{ (service.price_in_cent / 100).toFixed(2) }}€
    </div>

    <p class="mt-5 flex justify-center">Total : {{ prixTotal.toFixed(2) }}€</p>
    <div class="flex justify-center">
      <button
        class="mt-5 font-bold text-[var(--primary-color)] border-[2px] border-[var(--primary-color)] rounded-md hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)]"
        @click="continuer"
      >
        Continuer
      </button>
    </div>
  </div>
  <LoginModal v-model="isLoginModalOpen" />
</template>
