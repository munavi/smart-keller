<template>
  <Sidebar/>
  <div>
    <Search/>
  </div>
</template>

<script setup lang="ts">

import Search from "@/pages/listPage/search/Search.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
</script>

<style scoped lang="scss">
@import "src/css/pages/listPage/ListPage.scss";
</style>