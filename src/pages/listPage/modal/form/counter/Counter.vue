<template>
  <div>
    <va-counter v-model="props.counter"
                manual-input
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps
({
  counter: {type: Number, required: true}
})

</script>

<style scoped lang="scss">

</style>