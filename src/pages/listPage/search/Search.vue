<template>
      <div class="search">
        <va-input type="text" placeholder="Suchen" name="search" class="input"/>
        <va-button  @click="" color="primary" class="button">
          <span class="material-icons">search</span>
        </va-button>
    </div>
</template>

<script setup lang="ts">

import Modal from "@/pages/listPage/modal/Modal.vue";
</script>

<style scoped lang="scss">
@import "src/css/pages/listPage/search/Search.scss";
</style>