<template>
  <Sidebar/>
  <main>
    <va-content>
      <div class="dashboard">
        <AllItems/>
        <Medicines/>
        <ProductsData/>
        <ItemsSoonBad/>
        <ItemsSpoiled/>
      </div>
    </va-content>
  </main>
</template>

<script setup lang="ts">

import ProductsData from "@/pages/dashboard/productsData/ProductsData.vue";
import AllItems from "@/pages/dashboard/allItems/AllItems.vue";
import Medicines from "@/pages/dashboard/medicines/Medicines.vue";
import ItemsSoonBad from "@/pages/dashboard/itemsSoonBad/ItemsSoonBad.vue";
import ItemsSpoiled from "@/pages/dashboard/itemsSpoiled/ItemsSpoiled.vue";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import {provide} from "vue";

provide("pageName", "Dashboard");

</script>

<style scoped lang="scss">
@import "../../css/pages/dashboard/DashboardPage";
</style>