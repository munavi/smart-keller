<template>
  <div
      style="height: 13rem; border: 2px solid var(--va-primary);"
  >
    <va-sidebar :minimized="pageName.minimized" textColor="dark" minimizedWidth="64px">
      <template v-for="item in pageName.items" :key="item.to">
        <va-sidebar-item :active="item.active">
          <va-sidebar-item-content>
            <va-icon :name="item.icon" />
            <va-sidebar-item-title v-if="!pageName.minimized" style="height: 24px;">
              {{ item.title }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
    </va-sidebar>
  </div>
</template>

<script setup lang="ts">

const pageName = {
  items: [
    { title: 'Dashboard', icon: 'dashboard' },
    { title: 'Sidebar demo', icon: 'room', active: true },
    { title: 'Loop', icon: 'loop' },
  ],
  minimized: false,
}

</script>

<style scoped lang="scss">

</style>