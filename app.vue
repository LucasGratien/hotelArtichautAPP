<template>
  <UiPageTransition/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<style>
body {
  overflow-x: hidden;
}

html, body {
  width: 100vw;
  max-width: 100%;
  background-color: rgba(251, 249, 244, 1);
  letter-spacing: 2px;
}

.page-container {
  max-width: 1400px;
  margin-inline: auto;
}
</style>