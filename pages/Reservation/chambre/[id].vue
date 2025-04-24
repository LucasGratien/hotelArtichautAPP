<script setup>
import { ref, onMounted } from "vue";
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

const selectedServicesMap = ref(new Map());
const prixTotal = ref(0);
const isLoginModalOpen = ref(false);
const reservationId = ref(null);
const isLoading = ref(false);

// Données dynamiques
const checkIn = ref(route.query.check_in || "");
const checkOut = ref(route.query.check_out || "");
const numberOfPersons = ref(parseInt(route.query.persons) || 1);
const selectedRoomId = ref(parseInt(route.params.id));

onMounted(async () => {
  await serviceStore.fetchServices();

  const chambre = hotelStore.selectedRoom;
  if (chambre) {
    prixTotal.value = (chambre.category?.price_in_cent ?? 0) / 100;
  } else {
    console.error("❌ Chambre non trouvée !");
  }
});

const toggleService = (service) => {
  const price = service.price_in_cent / 100;
  if (selectedServicesMap.value.has(service.id)) {
    selectedServicesMap.value.delete(service.id);
    prixTotal.value = Math.max(0, prixTotal.value - price);
  } else {
    selectedServicesMap.value.set(service.id, service);
    prixTotal.value += price;
  }
};

const creerReservation = async () => {
  if (!authStore.isLoggedIn) {
    isLoginModalOpen.value = true;
    return;
  }

  // 💡 Log debug
  console.log("📅 checkIn:", checkIn.value);
  console.log("📅 checkOut:", checkOut.value);

  if (!checkIn.value || !checkOut.value) {
    console.error("❌ checkIn et checkOut doivent être fournis !");
    return;
  }

  try {
    isLoading.value = true;

    const payload = {
      check_in: checkIn.value,
      check_out: checkOut.value,
      number_of_persons: numberOfPersons.value,
      rooms: [selectedRoomId.value],
      services: Array.from(selectedServicesMap.value.keys()),
    };

    console.log("📦 Payload envoyé :", payload);

    const data = await $fetch("http://192.168.1.245:8000/api/booking", {
      method: "POST",
      headers: {
        Authorization: ` Bearer ${authStore.getToken}`,
        "Content-Type": "application/json",
      },
      body: payload,
    });

    if (!data?.id) {
      console.error("❌ Aucune réservation retournée");
      return;
    }

    reservationId.value = data.id;
  } catch (err) {
    console.error("❌ Exception lors de la réservation :", err);
  } finally {
    isLoading.value = false;localStorage.setItem("bookingData", JSON.stringify({
      reservation_id: reservationId.value,
      room_name: hotelStore.selectedRoom.room_name,
      check_in: checkIn.value,
      check_out: checkOut.value,
      persons: numberOfPersons.value,
      prix: prixTotal.value
    }));
  }

};

const payerReservation = async () => {
  if (!authStore.isLoggedIn) {
    isLoginModalOpen.value = true;
    return;
  }

  if (!reservationId.value) {
    await creerReservation();
  }

  if (!reservationId.value) {
    console.error("❌ Impossible d'obtenir l'ID de réservation");
    return;
  }

  try {
    const { data, error } = await useFetch(
      `http://192.168.1.245:8000/api/booking-management/checkout`,
      {
        method: "POST",
        body: { booking_id: reservationId },
        headers: {
          Authorization: `Bearer ${authStore.getToken}`,
        },
      },
    );

    if (error.value || !data.value?.url) {
      console.error(
        "❌ Erreur lors de la création de la session de paiement",
        error.value,
      );
      return;
    }

    window.location.href = data.value.url;
  } catch (err) {
    console.error("❌ Exception lors du paiement :", err);
  }
};

const continuer = () => {
  if (!authStore.isLoggedIn) {
    isLoginModalOpen.value = true;
  } else {
    router.push({
      path: "/",
      query: {
        chambre: selectedRoomId.value,
        services: Array.from(selectedServicesMap.value.keys()).join(","),
        prix: prixTotal.value,
        check_in: checkIn.value,
        check_out: checkOut.value,
        persons: numberOfPersons.value,
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
      {{
        hotelStore.rooms.find((room) => room.id === selectedRoomId)?.room_name
      }}
      - {{ prixTotal.toFixed(2) }}€
    </p>

    <p class="mt-2 flex justify-center">
      Séjour : {{ checkIn }} → {{ checkOut }} | {{ numberOfPersons }} personne{{
        numberOfPersons > 1 ? "s" : ""
      }}
    </p>

    <div class="mt-2 flex flex-col items-center gap-2">
      <div
        v-for="service in serviceStore.services"
        :key="service.id"
        class="flex items-center gap-2"
      >
        <input
          type="checkbox"
          :value="service.id"
          :checked="selectedServicesMap.has(service.id)"
          @change="toggleService(service)"
        />
        <label>
          {{ service.title }} - {{ (service.price_in_cent / 100).toFixed(2) }}€
        </label>
      </div>
    </div>

    <p class="mt-5 flex justify-center font-semibold">
      Total : {{ prixTotal.toFixed(2) }}€
    </p>

    <div class="flex justify-center gap-4">
      <button
        class="mt-5 font-bold text-[var(--primary-color)] border-[2px] border-[var(--primary-color)] rounded-md px-4 py-2 hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)]"
        @click="continuer"
        :disabled="isLoading"
        title="Je réglerais à la reservation"
      >
        Continuer
      </button>
      <button
        class="mt-5 font-bold text-[var(--primary-color)] border-[2px] border-[var(--primary-color)] rounded-md px-4 py-2 hover:text-[var(--secondary-color)] hover:bg-[var(--primary-color)]"
        @click="payerReservation"
        :disabled="isLoading"
      >
        {{ isLoading ? "Chargement..." : "Payer maintenant" }}
      </button>
    </div>
  </div>

  <LoginModal v-model="isLoginModalOpen" />
</template>
