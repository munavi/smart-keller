<template>
  <div>
    <va-modal
        v-model="props.isOpen"
        hide-default-actions
        overlay-opacity="0.6"
        no-outside-dismiss
        class="modal"
    >
      <template #header>
        <h2>Produktinformation</h2>
      </template>
        <h2 class="header">Kategorie</h2>
      <Category/>
      <h2>Vefrallsdatum</h2>
      <ExpirationDate />
      <h2>Lagerort</h2>
      <StoragePlace />
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
import Counter from "@/pages/listPage/modal/form/counter/Counter.vue";
import ExpirationDate from "@/pages/listPage/modal/form/expirationDate/ExpirationDate.vue";
import StoragePlace from "@/pages/listPage/modal/form/storagePlace/StoragePlace.vue";

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
@import "/src/css/pages/listPage/modal/Modal.scss";
</style>