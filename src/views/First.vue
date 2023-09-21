<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <div class="card">
          <div class="card-header">
            <h1 class="text-center">Form</h1>
          </div>
          <div class="card-body">
            <form>
              <input
                type="text"
                placeholder="Car name..."
                v-model="form.name"
                class="form-control my-2" />
              <input
                type="number"
                placeholder="Price"
                v-model="form.price"
                class="form-control my-2" />
              <input
                type="text"
                placeholder="Color"
                v-model="form.color"
                class="form-control my-2" />
              <select v-model="form.year" class="form-control my-2">
                <option value="" hidden selected>Select year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
              <textarea
                v-model="form.desc"
                placeholder="Description"
                class="form-control"></textarea>
            </form>
          </div>
          <div class="card-footer">
            <Button @click="save" :title="'save'">save</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-12">
        <table class="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>T/R</th>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Year</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cars" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.color }}</td>
              <td>{{ item.year }}</td>
              <td>{{ item.desc }}</td>
              <td>
                <Button @click="moveOneCar(item.id)" :title="detail"
                  >detail</Button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "@/components/ui/Button.vue";
import router from "../router";

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

const form = ref({
  name: "",
  year: "",
  price: null,
  color: "",
  desc: "",
});
const save = () => {
  cars.value.push({ ...form.value });
  form.value = { name: "", year: "", price: null, color: "", desc: "" };
};
const moveOneCar = (id) => {
  router.push({ name: "carinfo", params: { id: id } });
};
</script>

<style lang="scss" scoped></style>
