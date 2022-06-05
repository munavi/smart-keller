<template>
  <h3>Menu</h3>
  <div class="menu">
    <router-link to="/" class="button">
      <span class="material-icons">home</span>
      <span class="text">Home</span>
    </router-link>
    <router-link to="/about" class="button">
      <span class="material-icons">description</span>
      <span class="text">About</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@import "src/css/components/sidebar/Sidebar.scss";
@import "src/css/components/sidebar/menu/Menu.scss";
</style>