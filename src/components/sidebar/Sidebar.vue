<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img :src="logoURL" alt="Smart Keller" />
    </div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>

    <Menu/>

    <div class="flex"></div>
    <LogOutButton/>

  </aside>
</template>


<script setup lang="ts">

import { ref } from 'vue'
import Menu from "@/components/sidebar/menu/Menu.vue";
import LogOutButton from "@/components/buttons/LogOutButton.vue";
const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value.toString());
}
</script>

<style scoped lang="scss">

@import "/src/css/components/sidebar/Sidebar.scss";

</style>