<template>
  <div class="flex flex-col-reverse md:flex-row items-center bg-[var(--background-color)] p-8 rounded-lg shadow-lg w-full mt-4">
    <div class="text-container w-full md:w-1/2 flex flex-col justify-center relative z-10">
      <h2 class="underline font-bold text-3xl text-[var(--secondary-color)] mb-6 text-center md:text-left">SPA</h2>
      <p class="description text-[var(--secondary-color)] leading-relaxed mb-8 text-center md:text-left">
        L’espace bien-être de notre hôtel est une véritable oasis de détente, conçu pour vous offrir un moment de
        sérénité absolue. Profitez de notre spa raffiné, de notre sauna apaisant et de notre piscine chauffée pour
        une expérience revitalisante. Des espaces de relaxation et des soins personnalisés sont à votre disposition
        pour une parenthèse hors du temps. Dans un cadre élégant et apaisant, laissez-vous envelopper par une atmosphère
        propice au bien-être. Que ce soit pour un instant de douceur après une journée active ou pour un séjour dédié
        à la relaxation, notre espace bien-être vous promet une évasion inoubliable.</p>
      <div class="text-center md:text-left">
        <NuxtLink
            to="/Spa"
            class="
            bg-[var(--primary-color)] hover:bg-[var(--champ-color)]
            text-[var(--secondary-color)] hover:text-[var(--primary-color)]
             py-3 px-8 rounded-md shadow cta-btn"
        >
          En savoir+
        </NuxtLink>

      </div>
    </div>

    <div class="hover:scale-105 transition-transform duration-300 ease-in-out w-full md:w-1/2 relative flex justify-center items-center">
      <img
          class=" rounded-lg shadow-lg object-cover w-[80%] md:w-[70%] h-auto z-0"
          src="@/assets/images/woman-swimming-pool-spa.png"
          alt="Sauna"
      />
    </div>
  </div>
</template>

