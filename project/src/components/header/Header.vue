<template>
  <va-navbar color="#C5EFFC" shape>
  <Sidebar/>
    <template #center>
      <h5>{{ props.name }}</h5>
    </template>
    <template #right>
      <va-button icon-left="clear" color="warning">
        Logout
      </va-button>
    </template>
  </va-navbar>
</template>

<script setup lang="ts">

import Sidebar from "@/components/header/Sidebar.vue";

const props = defineProps({
  name: {type: String, required: false}
})

</script>

<style scoped lang="scss">
@import "../../css/components/header/Header.scss";
</style>