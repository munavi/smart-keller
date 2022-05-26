<template>
 <p class="data-block-headline">{{ content }}</p>
</template>

<script setup lang="ts">

defineProps
({
  content: {type: String, required: true}
})


</script>

<style scoped lang="scss">
@import "../src/css/baseDataContent/dataBlockHeadline/DataBlockHeadline.scss";
</style>