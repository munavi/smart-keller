<template>
  <va-navbar color="#C5EFFC" shape>
    <template #center>
      <h5>{{ PageName }}</h5>
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
import {inject} from "vue";

const PageName: string|undefined = inject("pageName");
</script>

<style scoped>

</style>