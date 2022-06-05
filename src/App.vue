<script setup lang="ts">
import Sidebar from "@/components/sidebar/Sidebar.vue";
</script>

<template>
  <div class="app">
    <Sidebar/>
    <router-view/>
  </div>

</template>

<style lang="scss">
:root {
  --primary: #4ade80;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

@import "src/css/App.scss";

</style>
