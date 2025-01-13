<template>
  <div class="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="js">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<style lang="css" scoped>
.title {
  color: rgba(234, 198, 132, 1) ;
  font-family: Lora, 'Times New Roman', serif;
  font-size: 2rem;
}
</style>

