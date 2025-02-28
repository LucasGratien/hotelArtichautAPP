<template>
  <div v-if="show" class="page-transition">
    <img
        v-motion
        :initial="{ opacity: 0, y: 100, scale: 0.5 }"
        :enter="{ opacity: 1, y: 0, scale: 1.8 }"
        :leave="{ opacity: 0, y: -100, scale: 1.2 }"
        :transition="{ duration: 1, ease: 'ease-in-out' }"
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
