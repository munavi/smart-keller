<template>
  <div>
    <va-button @click="showModal = !showModal">
      Show modal (custom rendering)
    </va-button>

    <va-modal
        v-model="showModal"
        hide-default-actions
        overlay-opacity="0.2"
    >
      <template #header>
        <h2>Custom header</h2>
      </template>
      <div>{{ message }}</div>
      <template #footer>
        <va-button>
          Custom action
        </va-button>
      </template>
    </va-modal>
  </div>
</template>

<script setup lang="ts">

const showModal:boolean = true;
let message = "gtjgoijiojtoi";

</script>

<style scoped lang="scss">

</style>