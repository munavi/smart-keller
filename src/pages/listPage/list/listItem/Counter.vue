<template>
    <va-counter
        v-model="props.counter"
        manual-input
        messages="Manual-input"
    />
</template>


<script setup lang="ts">

const props = defineProps
({
  counter: {type: Number, required: true}
})

</script>

<style scoped lang="scss">

</style>