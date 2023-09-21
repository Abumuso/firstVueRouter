<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-6 offset-3" v-for="(item, index) in oneCar" :key="index">
        <div class="card">
          <div class="card-header">
            <h1 class="text-center">{{ item.name }}</h1>
          </div>
          <div class="card-body">
            <p>Price:{{ item.price }}</p>
            <p>Color:{{ item.color }}</p>
            <p>Year:{{ item.year }}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-outline-info">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const cars = ref([
  {
    id: 1,
    name: "Nexia3",
    price: 12000,
    color: "white",
    year: 2020,
    desc: "izoh2",
  },
  {
    id: 2,
    name: "Cobalt",
    price: 13000,
    color: "white",
    year: 2021,
    desc: "izoh3",
  },
  {
    id: 3,
    name: "Gentra",
    price: 14000,
    color: "white",
    year: 2022,
    desc: "izoh4",
  },
  {
    id: 4,
    name: "Onix",
    price: 15000,
    color: "white",
    year: 2023,
    desc: "izoh5",
  },
]);
const oneCar = cars.value.filter((item) => item.id == route.params.id);
</script>

<style lang="scss" scoped></style>
