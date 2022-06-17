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

import ProductsData from "../../pages/dashboard/allData/ProductsData.vue";
import AllItems from "../../pages/dashboard/allData/AllItems.vue";
import Medicines from "../../pages/dashboard/allData/Medicines.vue";
import ItemsSoonBad from "../../pages/dashboard/allData/ItemsSoonBad.vue";
import ItemsSpoiled from "../../pages/dashboard/allData/ItemsSpoiled.vue";
import Sidebar from "../../components/sidebar/Sidebar.vue";
import {provide} from "vue";

provide("pageName", "Dashboard");

</script>

<style scoped lang="scss">
@import "../../css/pages/dashboard/DashboardPage";
</style>