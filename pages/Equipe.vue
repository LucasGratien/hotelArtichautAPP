<template>
  <div>
    <UiHerobanner :title="heroPageData?.title"
                  :text="heroPageData?.text"
                  :button="heroPageData?.button"
                  :image="heroPageData?.image"/>
  </div>
  <div class="bg-white">
    <div class="bg-[#f1ebd9] text-[#4b6447] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-center pt-8 md:pt-24 md:mx-8 md:mt-8">
      <h1 class="text-3xl pb-4">L’Équipe : Une Excellence au Service de Votre Séjour</h1>
      <p>Notre équipe incarne l’excellence et le raffinement,
        afin de garantir une expérience inoubliable à chacun de nos invités.
        Chaque membre est sélectionné avec soin pour ses compétences, son savoir-faire,
        et surtout son attention aux moindres détails.</p>
    </div>
    <UiCardInfos
        v-for="(card, index) in cardsEquipe"
        :key="index"
        :title="card.title"
        :text="card.text"
        :button="card.button"
        :image="card.image"
        :inverted="card.inverted"
    />
  </div>
</template>

<script setup lang="ts">
const heroPageData = {
  title: "L'Equipe",
  text: "Pour votre service",
  button: "",
  image: "/assets/image/brigade.jpg",
}

const cardsEquipe = [
  {
    title: "Directrice",
    text: "Madame Élise Dupont Une visionnaire passionnée par l’hospitalité de luxe, Madame Dupont dirige l’établissement avec élégance et innovation. Avec plus de 15 ans d’expérience dans l’hôtellerie de prestige, elle s’assure que chaque séjour dépasse les attentes. ",
    button: "",
    image: "/assets/image/equipe_placeholder.jpg",
    inverted: false,
  },
  {
    title: "Chef Etoile",
    text: " Chef Julien Morel Une cuisine qui mêle tradition et modernité. Le Chef Morel vous propose des saveurs uniques, avec des produits locaux soigneusement sélectionnés pour émerveiller vos papilles. ",
    button: "",
    image: "/assets/image/equipe_placeholder.jpg",
    inverted: true,
  },
  {
    title: "Service Client",
    text: " Monsieur Thomas Leclerc Toujours à votre écoute, Monsieur Leclerc et son équipe veillent à ce que chaque moment de votre séjour soit exceptionnel. ",
    button: "",
    image: "/assets/image/equipe_placeholder.jpg",
    inverted: false
  },
  {
    title: "Spa Manager",
    text: "Madame Sofia Martinez Responsable de notre sanctuaire de bien-être, Madame Martinez vous guide vers une détente absolue grâce à des soins exclusifs et personnalisés, issus des meilleures traditions du monde entier. ",
    button: "",
    image: "/assets/image/equipe_placeholder.jpg",
    inverted: true,
  }, {
    title: "Conciergerie",
    text: "Monsieur Louis Bernard Membre des Clefs d’Or, Monsieur Bernard orchestre les moindres détails pour répondre à toutes vos demandes, qu’il s’agisse d’organiser un dîner romantique, une excursion privée ou une arrivée en hélicoptère ",
    button: "",
    image: "/assets/image/equipe_placeholder.jpg",
    inverted: false,
  }
]
</script>

<style scoped>

</style>