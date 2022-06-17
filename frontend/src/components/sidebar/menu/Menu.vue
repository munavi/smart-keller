<template>
  <h3>Menu</h3>
  <div class="menu">
    <router-link to="/" class="button">
      <span class="material-icons">home</span>
      <span class="text">Dashboard</span>
    </router-link>
    <router-link to="/list" class="button">
      <span class="material-icons">playlist_add</span>
      <span class="text">Liste</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "src/css/components/sidebar/Sidebar.scss";
@import "src/css/components/sidebar/menu/Menu.scss";
</style>