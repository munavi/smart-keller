<template>
  <va-list className="position">
    <va-list-label>
      Contacts
    </va-list-label>
    <ListItem></ListItem>
  </va-list>
</template>

<script setup lang="ts">

import ListItem from "@/components/form/ListItem.vue";
</script>

<style scoped lang="scss">
.position
{
  position: center;
}
</style>