<template>
  <div class="add-button">
    <va-chip
      :icon="'add'"
      :size="'large'"
      @click="modalIsOpen = true"
    >
      Neues Lebensmittel
      <ModalNewProduct :isOpen=modalIsOpen :onClose=closeModal @close-modal="modalIsOpen = false"/>
    </va-chip>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import ModalNewProduct from "@/pages/listPage/newProduct/modalNewProduct/ModalNewProduct.vue";

const
    modalIsOpen = ref(false),
    closeModal = () => {
      modalIsOpen.value = false;
    };

</script>

<style scoped  lang="scss">
@import "/src/css/pages/listPage/newProduct/NewProduct.scss";
</style>