<template>
  <div class="medicines">
    <DataBlockHeadline content="Medikamente" />
    <div class="medicines-counter">{{50}}</div>
  </div>
</template>

<script setup lang="ts">
import DataBlockHeadline from "../../../components/dataBlockHeadline/DataBlockHeadline.vue";

</script>

<style scoped lang="scss">
@import "../../../css/pages/dashboard/medicines/Medicines";
</style>