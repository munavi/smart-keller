<template>
  <div class="list">
    <va-list>
      <va-list-label class="name">
        Lebensmittelvorrat
      </va-list-label>
      <va-list-item
          v-for="(product, index) in products"
          :key="index"
          class="list-item"
      >
        <ListItem :label=product.label :counter = product.counter></ListItem>
      </va-list-item>
    </va-list>
  </div>
</template>

<script setup lang="ts">

import ListItem from "./listItem/ListItem.vue";

const products = [
  {label: "Nudeln", counter: 10},
  {label: "Tomatendosen", counter: 10},
  {label: "Medikamenten", counter: 10},
  {label: "Öl", counter: 1},
  {label: "Fleischprodukte", counter: 10},
]

</script>

<style scoped lang="scss">
@import "src/css/pages/listPage/list/List.scss";
</style>