

<template>
<div>
  <UiHerobanner :title="heroPageData?.title"
                :text="heroPageData?.text"
                :button="heroPageData?.button"
                :image="heroPageData?.image" />
</div>
</template>

<script setup lang="ts">
const heroPageData = {
  title: "L'Equipe",
  text: "Pour votre service",
  button: "",
  image: "/assets/image/brigade.jpg",
}
</script>

<style scoped>

</style>