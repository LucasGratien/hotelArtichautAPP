<template>
  <div
    class="flex flex-col items-center justify-start min-h-[80vh] pt-10 text-[var(--primary-color)] bg-[var(--secondary-color)]"
  >
    <!-- Icone croix -->
    <svg
      class="w-16 h-16 text-red-500"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>

    <!-- Message -->
    <h1 class="text-2xl font-bold mt-4">Paiement refusé</h1>
    <p class="text-md mt-1 text-center max-w-md">
      Malheureusement, votre paiement n'a pas pu être effectué. Veuillez
      réessayer ou contacter notre support si le problème persiste.
    </p>

    <!-- Retour -->
    <NuxtLink
      to="/"
      class="px-5 py-2 mt-6 text-md font-semibold text-[var(--primary-color)] border-2 border-[var(--primary-color)] rounded-md hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)] transition"
    >
      Retour à l'accueil
    </NuxtLink>
  </div>
</template>
