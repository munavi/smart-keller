<template>
  <div>
    <va-modal
        v-model="props.isOpen"
        hide-default-actions
        overlay-opacity="0.6"
        no-outside-dismiss
    >
      <template #header>
        <h2>Produktinformation</h2>
      </template>
        <h2>Kategorie</h2>
      <Category/>
      <h2>Anzahl</h2>
     <Counter :counter=10 />
      <template #footer>
        <va-button @click="emitCloseModal" >
          Close
        </va-button>
      </template>
    </va-modal>
  </div>
</template>

<script setup lang="ts">

import Category from "@/pages/listPage/modal/form/category/Category.vue";
import Counter from "@/pages/listPage/modal/form/Counter.vue";

const props = defineProps
({
  isOpen: {type: Boolean, required: true},
  onClose: {type: Function, required: true}
})

const
    emit = defineEmits(['closeModal']),
    emitCloseModal = () => emit('closeModal');


</script>

<style scoped lang="scss">

</style>