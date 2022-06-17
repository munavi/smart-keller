<template>
  <div class="items-spoiled">
    <DataBlockHeadline content="Abgelaufene Waren" />
    <div class="items-spoiled-counter">{{10}}</div>
  </div>
</template>

<script setup lang="ts">
import DataBlockHeadline from "../../../components/dataBlockHeadline/DataBlockHeadline.vue";

</script>

<style scoped lang="scss">
@import "../../../css/pages/dashboard/itemsSpoiled/ItemsSpoiled";
</style>