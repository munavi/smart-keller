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


@import "src/css/App.scss";

</style>
