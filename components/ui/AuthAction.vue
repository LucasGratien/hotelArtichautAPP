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
  <UModal v-model="isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <Placeholder class="h-8"/>
      </template>
      <section>
        <form @submit.prevent="signIn">
          <input
              v-model="email"
              type="email"
              placeholder="Email"
          />
          <input
              v-model="password"
              type="password"
              placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </section>
      <Placeholder class="h-32"/>

      <template #footer>
        <Placeholder class="h-8"/>
      </template>
    </UCard>
  </UModal>
</template>
