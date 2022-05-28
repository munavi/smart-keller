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

import ProductsData from "@/pages/dashboard/productsData/ProductsData.vue";
import AllItems from "@/pages/dashboard/allItems/AllItems.vue";
import Medicines from "@/pages/dashboard/medicines/Medicines.vue";
import ItemsSoonBad from "@/pages/dashboard/itemsSoonBad/ItemsSoonBad.vue";
import ItemsSpioled from "@/pages/dashboard/itemsSpoiled/ItemsSpoiled.vue";
import Header from "@/components/header/Header.vue";
import router from "@/router";


</script>

<style scoped lang="scss">
@import "../../css/pages/dashboard/Dashboard";
</style>