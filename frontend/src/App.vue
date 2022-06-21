<script setup lang="ts">
/**
 * @author    Wolfgang Kowarschick <kowa@hs-augsburg.de>
 * @copyright 2021-2022
 * @license   MIT
 */
import StoreUser from '../../frontend/src/store/StoreUser'

const
    storeUser = StoreUser()

</script>

<template>
  <div class="app">
    <router-view/>
  </div>

</template>

<style lang="scss">


@import "src/css/App.scss";

</style>
