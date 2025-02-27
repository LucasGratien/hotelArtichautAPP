<script setup>
const items = [
  [{
    label: 'Sign-in',
    icon: 'i-heroicons-arrow-right-on-rectangle',
  }],
  [{
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth'
  }], [{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
];
const isOpen = ref(false)
import signLogo from "@/assets/logo/user.png"

const { credentials, pending, login, errorMsg } = useLogin({
  credentials: {
    email: '',
    password: '',
  },
})

</script>

<template>
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
             :popper="{ placement: 'bottom-start' }">
    <UAvatar :src="signLogo"/>

    <template #account="{ item }">
      <div class="text-left">
        <p>
          Signed in as
        </p>
        <p class="truncate font-medium text-gray-900 dark:text-white">
          {{ item.label }}
        </p>
      </div>
    </template>

    <template #item="{ item }">
      <span class="truncate" @click="isOpen = true">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto"/>
    </template>
  </UDropdown>
  <UModal v-model="isOpen" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800'}">
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
            <p>{{ errorMsg }}</p>
            <UInput
                v-model="credentials.email"
                type="email"
                placeholder="Email"
            />
            <UInput
                v-model="credentials.password"
                type="password"
                placeholder="Password"
            />
          </form>

      </section>
      <template #footer>
        <UButton color="gray" variant="ghost" type="submit" :disabled="pending">Login</UButton>
      </template>
    </UCard>
  </UModal>
</template>
