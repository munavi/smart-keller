<template>
  <Sidebar/>
  <main>
    <va-content>
      <div class="list-page">
        <Search/>
        <List/>
        <NewProduct />
      </div>
    </va-content>
  </main>
</template>

<script setup lang="ts">

import Search from "./../../pages/listPage/search/Search.vue";
import Sidebar from "./../../components/sidebar/Sidebar.vue";
import List from "./../../pages/listPage/list/List.vue";
import NewProduct from "./../../pages/listPage/newProduct/NewProduct.vue";
</script>

<style scoped lang="scss">
@import "src/css/pages/listPage/ListPage.scss";
</style>