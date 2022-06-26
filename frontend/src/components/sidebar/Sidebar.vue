<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img src="../../assets/img/logo/smart_keller_logo.png" alt="Smart Keller"/>
    </div>
    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="menuToggle">
        <span class="material-icons">keyboard_double_arrow_right</span>
      </button>
    </div>
    <Menu/>
    <div class="flex"></div>
    <LogOutButton/>
  </aside>
</template>


<script setup lang="ts">

/**
 * Creating and styling of Sidebar element was based on the code
 * of the following author
 * @author  https://github.com/TylerPottsDev/yt-vue-sidebar
 */


import {ref} from 'vue'
import Menu from "../../components/sidebar/menu/Menu.vue";
import LogOutButton from "../../components/buttons/LogOutButton.vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const menuToggle = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value.toString());
}
</script>

<style scoped lang="scss">

@import "/src/css/components/sidebar/Sidebar.scss";

</style>