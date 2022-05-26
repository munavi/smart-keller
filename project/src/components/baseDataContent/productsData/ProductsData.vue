<template>
  <div class="base-data">
    <DataBlockHeadline content="Lebensmittel"/>
    <div class="container">
      <BaseDataContent label="Nudeln" counter="100"/>
      <BaseDataContent label="Dosen" counter="200"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import DataBlockHeadline from "@/components/baseDataContent/dataBlockHeadline/DataBlockHeadline.vue";
import BaseDataContent from "@/components/baseDataContent/BaseDataContent.vue";
</script>

<style scoped lang="scss">
@import "../src/css/baseDataContent/productsData/ProductsData.scss";
</style>