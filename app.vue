<template>
  <UiPageTransition/>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>


<style>
body {
  overflow-x: hidden;
  background-color: rgba(251, 249, 244, 1);
  background-image: url('@/assets/images/bckgnd_artichoked.png');
  background-repeat: repeat;
  background-size: 100% auto;
  background-position: top left;
}

html, body {
  width: 100vw;
  max-width: 100%;
  letter-spacing: 2px;
}
</style>