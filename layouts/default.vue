<template>
  <Theheader/>
  <main class="main">
  <div>

    <slot/>
  </div>
  </main>
  <TheFooter/>
</template>
<script setup lang="ts">
import Theheader from "~/components/layout/Theheader.vue";
import TheFooter from "~/components/layout/TheFooter.vue";

</script>