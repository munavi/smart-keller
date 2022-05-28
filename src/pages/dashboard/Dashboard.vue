<template>
  <main>
    <va-content>
      <Header name="Dashboard"/>
      <div class="dashboard">
        <AllItems/>
        <Medicines/>
        <ProductsData/>
        <ItemsSoonBad/>
        <ItemsSpioled/>
      </div>
    </va-content>
  </main>
</template>

<script setup lang="ts">

import ProductsData from "src/pages/dashboard/productsData/ProductsData.vue";
import AllItems from "src/pages/dashboard/allItems/AllItems.vue";
import Medicines from "src/pages/dashboard/medicines/Medicines.vue";
import ItemsSoonBad from "src/pages/dashboard/itemsSoonBad/ItemsSoonBad.vue";
import ItemsSpioled from "src/pages/dashboard/itemsSpoiled/ItemsSpoiled.vue";
import Header from "src/components/header/Header.vue";
import Sidebar from "src/components/header/Sidebar.vue";

</script>

<style scoped lang="scss">
@import "../../css/pages/dashboard/Dashboard";
</style>