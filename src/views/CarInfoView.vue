<template>
  <div>
    <h1>CAR INFO page</h1>
    <h3>MARKA: {{marka}}</h3>
    <h3>MODEL: {{ model[route.params.id] }}</h3>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
// const index = route.params.id;
const marka = ref("chevrolet");
const model = ref(["malibu", "onix", "gentra", "spark"]);
const route = useRoute();
// console.log(arr);
</script>

<style lang="scss" scoped></style>
