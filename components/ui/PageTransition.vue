<template>
  <div v-if="show" class="page-transition">
    <img
        v-motion
        :initial="{ opacity: 0, y: 100, scale: 0.5 }"
        :enter="{ opacity: 1, y: 0, scale: 1.8 }"
        :leave="{ opacity: 0, y: -100, scale: 1.2 }"
        :transition="{
    duration: 1,
    ease: 'ease-in-out',
    opacity: 'ease-out',
    delay: 0.2
  }"
        :src="logoSrc"
        alt="L'Artichaut Logo"
        class="logo"
    />




  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const show = ref(false);
const router = useRouter();
import logoSrc from 'assets/images/transition.png';

router.beforeEach(() => {
  show.value = true;
});

router.afterEach(() => {
  setTimeout(() => {
    show.value = false;
  }, 1000);
});
</script>

<style scoped>
.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.94);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.logo {
  width: 350px;
}
</style>
