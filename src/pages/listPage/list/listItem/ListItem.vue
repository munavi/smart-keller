<template>
  <div>
    <va-list-item class="list-item">
      <va-button @click="modalIsOpen = true" color="primary">
        <span class="material-icons">edit</span>
        <Modal :isOpen=modalIsOpen :onClose=closeModal @close-modal="modalIsOpen = false"/>
      </va-button>
      <va-list-item-section class="label">
        <va-list-item-label>
          {{ props.label }}
        </va-list-item-label>
      </va-list-item-section>
      <va-list-item-section class="counter">
        <va-counter v-model="props.counter"
                    manual-input
        />
      </va-list-item-section>
      <va-button @click="" color="warning">
        <span class="material-icons">delete</span>
      </va-button>
    </va-list-item>
  </div>
</template>

<script setup lang="ts">


import {ref} from "vue";
import Modal from "@/pages/listPage/modal/Modal.vue";
import Counter from "@/pages/listPage/modal/form/Counter.vue";

const props = defineProps
({
  label: {type: String, required: true},
  counter: {type: Number, required: true}
})


const
    modalIsOpen = ref(false),
    closeModal = () => {
      modalIsOpen.value = false;
    };


</script>

<style scoped lang="scss">
@import "src/css/pages/listPage/list/listItem/ListItem.scss";
</style>