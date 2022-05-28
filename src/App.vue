<script setup lang="ts">
import Dashboard from "@/pages/dashboard/Dashboard.vue";

</script>

<template>
  <nav>
    <router-link to="/" replace></router-link> |
    <router-link to="/dashboard"></router-link>
    <router-link to="/page404"></router-link>
  </nav>
  <main>
    <Dashboard/>
  </main>
</template>

<style lang="scss">

</style>
