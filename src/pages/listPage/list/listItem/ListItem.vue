<template>
  <div>
    <va-list-item class="list-item">
      <va-button @click="" color="primary" class="button">
        <span class="material-icons">edit</span>
      </va-button>
      <va-list-item-section label>
        <va-list-item-label>
          {{ props.label }}
        </va-list-item-label>
      </va-list-item-section>
      <va-list-item-section icon>
        <va-list-item-label>
          {{ props.counter }}
        </va-list-item-label>
      </va-list-item-section>
      <va-button @click="" color="warning" class="delete-button">
        <span class="material-icons">delete</span>
      </va-button>
    </va-list-item>
  </div>
</template>

<script setup lang="ts">

const props = defineProps
({
  label: {type: String, required: true},
  counter: {type: Number, required:true}
})

</script>

<style scoped lang="scss">
@import "src/css/pages/listPage/list/listItem/ListItem.scss";
</style>