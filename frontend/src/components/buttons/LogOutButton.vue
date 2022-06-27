<template>
  <va-button color="warning" @click="logout">
    <span class="material-icons">logout</span>
  </va-button>
</template>

<script setup lang="ts">
import StoreUser from "../../store/StoreUser";


const storeUser = StoreUser();

const logout = () => {
  storeUser.logout();
  // It should be rerender with storeToRefs or computed
  // https://stackoverflow.com/questions/71676111/vue-component-doesnt-update-after-state-changes-in-pinia-store
  // https://stackoverflow.com/questions/72078388/why-my-vue-components-dont-update-when-the-state-in-pinia-changes
  // https://stackoverflow.com/questions/62975890/how-to-reload-refresh-a-webpage-in-vue-js-after-a-certain-event-or-a-button-is-c
  window.location.reload();
}
</script>

<style scoped lang="scss">

</style>