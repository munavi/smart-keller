<template>
  <div>
    <va-input
        v-model="value"
    />
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

const value = ref("");

</script>

<style scoped lang="scss">

</style>