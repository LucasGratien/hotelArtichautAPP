<template>
  <UVerticalNavigation :links="links">
    <template #default="{ link }">
      <span class="group-hover:text-primary relative">{{ link.label }}</span>
    </template>
  </UVerticalNavigation>
</template>
<script>
export default {
  name: 'Sidebar',
}
const links = [{
  label: 'Vertical Navigation',
  to: '/components/vertical-navigation'
}, {
  label: 'Command Palette',
  to: '/components/command-palette'
}, {
  label: 'Table',
  to: '/components/table'
}]
</script>

<style lang="scss" scoped>

</style>