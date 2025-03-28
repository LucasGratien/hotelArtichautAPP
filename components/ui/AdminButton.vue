<script setup >
const authStore = useAuthStore();
import imgButton  from "@/assets/logo/adminKey.png";
</script>

<template>
  <div v-if="authStore.isLoggedIn && authStore.tokenUser.role_id > 2">
    <NuxtLink to="/admin/contentadmin">
      <UAvatar
          :src="imgButton"
          alt="Logo"
      />
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>