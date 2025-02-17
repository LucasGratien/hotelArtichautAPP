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
  color: var(--primary-color);
  font-size: 3rem;
}
</style>

