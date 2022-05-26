<template>
 <p class="data-block-headline">{{content}}</p>
</template>

<script setup lang="ts">

defineProps
({
  content: {type: String, required: true}
})


</script>

<style scoped lang="scss">
.data-block-headline
{
  color: var(--color-background);
  font-size: 1.2rem;
  @media (max-width: 330px){
    font-size: 1rem;
  }
  margin-left: 0.5rem;
  border-bottom: 0.1rem solid var(--color-background);
  text-transform: uppercase;
  height: 1.5rem;
}
</style>