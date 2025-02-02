<template>
  <div>
    <BaseSwitch v-model="value" label="Switch me" />
    <BaseSwitch v-model="value2" label="Switch me" />
    <BaseInputNumber v-model="inputNumber" label="Input number" :width="200"/>
  </div>
</template>

<script setup lang="ts">
const value = ref(false);
const value2 = ref(true);
const inputNumber = ref(0);
</script>

<style scoped></style>
