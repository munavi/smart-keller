<template>
  <div class="all-items">
    <DataBlockHeadline content="Alle Produkte" />
    <div class="all-items-counter">{{1000}}</div>
  </div>
</template>

<script setup lang="ts">
import DataBlockHeadline from "../../../components/dataBlockHeadline/DataBlockHeadline.vue";
</script>

<style scoped lang="scss">
@import "../../../css/pages/dashboard/allItems/AllItems";
</style>