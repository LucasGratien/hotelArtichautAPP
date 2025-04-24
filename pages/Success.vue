<template>
  <div
    class="flex flex-col items-center justify-start min-h-[80vh] pt-10 px-4 text-[var(--primary-color)] bg-[var(--secondary-color)]"
  >
    <!-- Cercle avec check centré -->
    <div
      class="flex items-center justify-center w-20 h-20 rounded-full bg-green-100 border-4 border-green-500"
    >
      <svg
        class="w-10 h-10 text-green-600"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>

    <!-- Titre -->
    <h1 class="text-2xl font-bold mt-6 text-center">
      Paiement effectué avec succès !
    </h1>
    <p class="text-md mt-2 text-center">Merci pour votre réservation 🎉</p>

    <!-- Bloc récap -->
    <div
      id="recap-container"
      class="bg-white text-black shadow-xl rounded-lg p-5 flex flex-col mt-6 w-full max-w-lg border border-[var(--primary-color)]"
    >
      <h2
        class="text-xl font-semibold text-center text-[var(--primary-color)] mb-4"
      >
        Récapitulatif
      </h2>
      <ul class="space-y-2 text-sm sm:text-base">
        <li><strong>Chambre :</strong> {{ roomName }}</li>
        <li><strong>Dates :</strong> {{ checkIn }} → {{ checkOut }}</li>
        <li><strong>Nombre de personnes :</strong> {{ numberOfPersons }}</li>
        <li><strong>Total :</strong> {{ prixTotal.toFixed(2) }} €</li>
      </ul>
    </div>
    <!-- Bouton retour -->
    <NuxtLink
      to="/"
      class="px-6 py-3 mt-8 text-md font-semibold text-[var(--primary-color)] border-2 border-[var(--primary-color)] rounded-md hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] transition duration-200"
    >
      Retour à l'accueil
    </NuxtLink>
    <button
      @click="downloadInvoice"
      class="mt-4 px-4 py-2 text-sm font-semibold text-white bg-[var(--primary-color)] rounded hover:bg-opacity-90"
    >
      Télécharger la facture PDF
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const route = useRoute();

const reservationId = ref(null);
const roomName = ref("Non spécifiée");
const checkIn = ref("Date inconnue");
const checkOut = ref("Date inconnue");
const numberOfPersons = ref(1);
const prixTotal = ref(0);

const downloadInvoice = async () => {
  const element = document.querySelector("#recap-container");
  if (!element) return;

  const canvas = await html2canvas(element, { scale: 2 });
  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
  pdf.save(`facture-${reservationId.value}.pdf`);
};
console.log("prixTotal =", prixTotal.value);
onMounted(() => {
  if (route.query.reservation_id) {
    reservationId.value = route.query.reservation_id;
    roomName.value = route.query.room_name;
    checkIn.value = route.query.check_in;
    checkOut.value = route.query.check_out;
    numberOfPersons.value = parseInt(route.query.persons || 1);
    prixTotal.value = parseFloat(route.query.prix || 0);
  } else if (process.client && localStorage.getItem("bookingData")) {
    const saved = JSON.parse(localStorage.getItem("bookingData"));
    reservationId.value = saved.reservation_id;
    roomName.value = saved.room_name;
    checkIn.value = saved.check_in;
    checkOut.value = saved.check_out;
    numberOfPersons.value = saved.persons;
    prixTotal.value = saved.prix;
  }
});
console.log("PrixTotal =", prixTotal.value);
</script>
