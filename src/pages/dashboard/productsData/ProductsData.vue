<template>
  <div class="base-data">
    <DataBlockHeadline content="Lebensmittel"/>
    <div class="base-data-container">
      <BaseDataContent label="Tomatendosen" counter="100"/>
      <BaseDataContent label="Dosen" counter="200"/>
      <BaseDataContent label="Nudeln+Getreide" counter="12"/>
      <BaseDataContent label="Öle" counter="2"/>
      <BaseDataContent label="Sauces" counter="3"/>
      <BaseDataContent label="Milchprodukte" counter="4"/>
      <BaseDataContent label="Fleischprodukte" counter="2"/>
      <BaseDataContent label="Obst" counter="5"/>
      <BaseDataContent label="Gemüse" counter="10"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import DataBlockHeadline from "@/components/dataBlockHeadline/DataBlockHeadline.vue";
import BaseDataContent from "@/components/baseDataContent/BaseDataContent.vue";
</script>

<style scoped lang="scss">
@import "/../smart-keller/src/css/pages/dashboard/productsData/ProductsData.scss";
</style>