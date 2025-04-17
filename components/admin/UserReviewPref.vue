<script setup>
const verticalCard = {
  title: "bonjour",
  content: "bonsoir",
}

</script>

<template>
  <div class="col-span-1">
    <div class="bg-white rounded-lg shadow-md p-8 h-full">
      <div class="space-y-6">
        <div class="bg-gray-100 p-4 rounded-lg">

          <p>{{ verticalCard.title }}</p>
          <p>{{ verticalCard.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>