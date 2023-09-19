<template>
  <div>
    <h1>CARS Page</h1>
    <div v-for="(item, index) in model" :key="index">
      <router-link :to="{ name: 'carinfo', params: { id: index } }"
        ><p>{{ item }}</p></router-link
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
// const number = ref(1)
const model = ref(["malibu", "onix", "gentra", "spark"]);
</script>

<style lang="scss" scoped></style>
