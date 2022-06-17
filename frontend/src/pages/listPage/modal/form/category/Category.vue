<template>
  <div style="max-width: 300px;">
    <va-select v-model="value" :options="categories" />
  </div>
</template>


<script setup lang="ts">

import {CategoryType} from "./CategoryType";
import {ref} from "vue";

const
    value = ref("Lebensmittel"),
    categories = Object.values(CategoryType);

</script>

<style scoped lang="scss">

</style>