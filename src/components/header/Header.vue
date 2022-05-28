<template>
  <va-navbar color="#C5EFFC" shape>
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

import {VaButton, VaNavbar} from "vuestic-ui";

const props = defineProps({
  name: {type: String, required: false}
})

</script>

<style scoped lang="scss">
@import "/../smart-keller/src/css/components/header/Header";
</style>