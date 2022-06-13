<template>
  <div>
      <va-date-input v-model="value" :format="formatFunction" :parse="parseFunction" manual-input/>
  </div>
</template>

<script setup lang="ts">

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const
    value: Date = new Date(),
    formatFunction = (date: Date) => {
      return `${date.getDate()} - ${monthNames[date.getMonth()]} - ${date.getFullYear()}`
    },
    parseFunction = (text: any) => {
      const [day, monthName, year] = text.split(' - ');
      const month = monthNames.findIndex((m) => m === monthName);
      return new Date(year, month, day)
    };

</script>

<style scoped lang="scss">

</style>