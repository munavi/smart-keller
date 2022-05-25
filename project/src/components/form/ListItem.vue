<template>
  <va-list-item
      v-for="(contact, index) in contacts"
      :key="index">

    <va-list-item-section avatar>
      <va-avatar>
        <img :src="contact.img" alt="avatar">
      </va-avatar>
    </va-list-item-section>

    <va-list-item-section>

      <va-list-item-label>
        {{ contact.name }}
      </va-list-item-label>

      <va-list-item-label caption>
        {{ contact.address }}
      </va-list-item-label>
    </va-list-item-section>
  </va-list-item>
</template>

<script setup lang="ts">
import {ref, computed} from 'vue'

const
    section = ref('question'),
    helloStranger = ref('Hello, Stranger'),
    text = ref(''),

    hello = computed(() => `Hello, ${text.value}!`),
    visability = (p_section: string): string =>
        p_section !== section.value ? 'hidden' : '',
    sayHello = () => {
      section.value = 'hello'
    },
    contacts = [
      {
        name: 'Audrey Clay',
        address: '644 Vermont Court, Freelandville, Kentucky, 2619',
        img: 'https://randomuser.me/api/portraits/women/5.jpg'
      },
      {
        name: 'Aguirre Klein',
        address: '626 Carroll Street, Roulette, Ohio, 1477',
        img: 'https://randomuser.me/api/portraits/men/1.jpg'
      },
      {
        name: 'Tucker Kaufman',
        address: '887 Winthrop Street, Tryon, Florida, 3912',
        img: 'https://randomuser.me/api/portraits/men/3.jpg'
      },
      {
        name: 'Herbert Keller',
        address: '286 NW. Shore St.Longwood, FL 32779',
        img: 'https://randomuser.me/api/portraits/men/5.jpg'
      },
    ]
</script>


<style scoped lang="css">

</style>