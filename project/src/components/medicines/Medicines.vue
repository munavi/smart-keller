<template>
  <div class="medicines">
    <DataBlockHeadline content="Medikamente" />
    <div class="medicines-counter">{{50}}</div>
  </div>
</template>

<script setup lang="ts">
import DataBlockHeadline from "../baseDataContent/dataBlockHeadline/DataBlockHeadline.vue";

</script>

<style scoped lang="scss">
@import "../src/css/medicines/Medicines.scss";
</style>