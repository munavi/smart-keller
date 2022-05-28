<script setup lang="ts">
import { ref, computed } from 'vue'

const
    section       = ref('question'),
    helloStranger = ref('Hello, Stranger'),
    text          = ref(''),

    hello      = computed(() => `Hello, ${text.value}!`),
    visability = (p_section: string): string =>
        p_section !== section.value ? 'hidden' : '',
    sayHello   = () => { section.value = 'hello' }
</script>

<template>
    <label :for="id" v-if="label !== ''">{{label}}</label>
    <input :id="id" type="text" v-model="text" :autofocus="autofocus" />
</template>

<style scoped lang="scss">
</style>
