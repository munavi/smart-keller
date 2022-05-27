<template>
  <main>
    <va-content>
      <div class="dashboard">
        <AllItems/>
        <Medicines/>
        <ProductsData/>
      </div>
    </va-content>
  </main>
</template>

<script setup lang="ts">

import ProductsData from "@/components/baseDataContent/productsData/ProductsData.vue";
import AllItems from "@/components/pages/dashboard/allItems/AllItems.vue";
import Medicines from "@/components/pages/dashboard/medicines/Medicines.vue";

</script>

<style scoped lang="scss">
@import "../../../css/pages/dashboard/Dashboard";
</style>