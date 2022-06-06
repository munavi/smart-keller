<template>
  <Sidebar/>
  <div>
    <Search/>
    <List/>
  </div>
</template>

<script setup lang="ts">

import Search from "@/pages/listPage/search/Search.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import List from "@/pages/listPage/list/List.vue";
</script>

<style scoped lang="scss">
@import "src/css/pages/listPage/ListPage.scss";
</style>