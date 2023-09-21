import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import CarsView from "../views/CarsView.vue";
import CarInfoView from '../views/CarInfoView.vue'
import FirstView from '../views/First.vue'

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: HomeView,
  // },
  {
    path: "/",
    name: "first",
    component: FirstView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/cars",
    name: "cars",
    component: CarsView,
  },
  {
    path: "/carinfo/:id",
    name: "carinfo",
    component: CarInfoView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
