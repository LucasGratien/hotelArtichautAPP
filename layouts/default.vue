<template>
  <Theheader/>
  <main class="main">
  <div>
    <slot/>
    <logo/>
  </div>
  </main>
  <TheFooter/>
</template>
<script setup lang="ts">
import Theheader from "~/components/layout/Theheader.vue";
import TheFooter from "~/components/layout/TheFooter.vue";
import Logo from "~/components/ui/Logo.vue";

</script>