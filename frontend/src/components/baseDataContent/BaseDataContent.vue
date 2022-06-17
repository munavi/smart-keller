<template>

  <div class="base-data-content">
    <div class="label">{{ props.label }}</div>
    <div class="counter">{{ props.counter }}</div>
  </div>

</template>

<script setup lang="ts">

const props = defineProps
({
  label: {type: String, required: true},
  counter: {type: String}
})

</script>

<style scoped lang="scss">
@import "/src/css/pages/dashboard/productsData/ProductsData.scss";
</style>