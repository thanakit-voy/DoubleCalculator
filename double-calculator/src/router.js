import Vue from "vue";
import Router from "vue-router";
import Calculators from "./views/Calculators.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/calculators" },
    { path: "/calculators", name: "calculators", component: Calculators },
    { path: "*", redirect: "/calculators" },
  ],
});
