<template>
  <div>
    <va-modal
        v-model="props.isOpen"
        hide-default-actions
        overlay-opacity="0.6"
        no-outside-dismiss
    >
      <template #header>
        <h2>Custom header</h2>
      </template>
      <div>{{ message }}</div>
      <template #footer>
        <va-button @onClick="props.onClose">
          Custom action
        </va-button>
      </template>
    </va-modal>
  </div>
</template>

<script setup lang="ts">

const props = defineProps
({
  isOpen: {type: Boolean, required: true},
  onClose: {type: Function, required: true}
})

let message = "Message in Modal";


</script>

<style scoped lang="scss">

</style>