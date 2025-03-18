<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from '~/stores/auth';

const authStore = useAuthStore();
const isOpen = defineModel();
const credentials = reactive({
  email: '',
  password: '',
});
const errorMsg = ref('');
const pending = ref(false);

const login = async () => {
  pending.value = true;
  errorMsg.value = '';
  try {
    const response = await authStore.login(credentials);
    if (authStore.isLoggedIn) {
      isOpen.value = false;
      // alert(`Bienvenue, ${authStore.user.email} !`);
    } else {
      errorMsg.value = 'Login failed. Please check your credentials.';
    }
  } catch (error) {
    errorMsg.value = 'An error occurred during login.';
  } finally {
    pending.value = false;
  }
};
</script>

<template>
  <UModal v-model="isOpen" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Connection
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                   @click="isOpen = false"/>
        </div>
      </template>
      <section>
        <form @submit.prevent="login">
          <p class="text-red-500" v-if="errorMsg">{{ errorMsg }}</p>
          <UInput v-model="credentials.email" type="email" placeholder="Email" class="mb-2" />
          <UInput v-model="credentials.password" type="password" placeholder="Password" class="mb-4" />
          <UButton color="gray" variant="ghost" type="submit" :disabled="pending" class="w-full">
            {{ pending ? 'Logging in...' : 'Login' }}
          </UButton>
        </form>
      </section>
    </UCard>
  </UModal>
</template>
