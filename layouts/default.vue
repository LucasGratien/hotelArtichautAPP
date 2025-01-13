<template>
  <Theheader/>
  <main class="main">
  <div>
    <slot/>
  </div>
  </main>
  <Thefooter/>
</template>
<script setup lang="ts">
import Theheader from "~/components/layout/Theheader.vue";
import Thefooter from "~/components/layout/Thefooter.vue";
</script>