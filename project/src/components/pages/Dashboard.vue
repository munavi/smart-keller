<template>
  <main>
    <va-content>
      <div class="dashboard">
        <ProductsData/>
      </div>
    </va-content>
  </main>
</template>

<script setup lang="ts">

import ProductsData from "@/components/baseDataContent/productsData/ProductsData.vue";

</script>

<style scoped lang="scss">
@import "../../css/pages/Dashboard.scss";
</style>