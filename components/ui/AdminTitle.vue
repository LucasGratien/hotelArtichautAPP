<script setup lang="js">
defineProps({
      title: String,
    }
)

</script>

<template>
  <div
    class="bg-[var(--secondary-color)] p-4 border-2 border-[var(--primary-color)]"
  >
    <div class="flex items-center">
      <h2 class="text-[var(--primary-color)] font-bold text-xl pl-4">
        {{ title }}
      </h2>
    </div>
  </div>
</template>


