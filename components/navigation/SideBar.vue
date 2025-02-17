<template>
  <UVerticalNavigation :links="links">

    <template #default="{ link }">
      <span class="group-hover:text-primary relative items-center text-[var(primary)] font-cardo">{{ link.label }}</span>
    </template>

  </UVerticalNavigation>
</template>
<script setup lang="js">

const links = [{
  label: 'Services',
  to: '/components/vertical-navigation'
}, {
  label: 'Rooms ',
  to: '/components/command-palette'
}, {
  label: 'Contents',
  to: '/components/table'
}, {
  label: 'Clients',
  to: '/components/command-palette'
}, {
  label: 'Reservations',
  to: '/components/command-palette'
}, {
  label: 'Staff',
  to: '/components/command-palette'
}, {
  label: 'Statistiques',
  to: '/components/command-palette'
}]
</script>

<style lang="scss" scoped>

</style>