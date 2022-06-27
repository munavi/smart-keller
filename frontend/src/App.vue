<script setup lang="ts">
/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2021-2022
 * @license   MIT
 */
import Router from "./router";

const
    router    = Router();

</script>

<template>
  <div class="app">
    <router-view/>
  </div>

</template>

<style lang="scss">


@import "src/css/App.scss";

</style>
