import Vue from "vue";
import Router from "vue-router";
import SingleFileComponent from "./views/SingleFileComponent";
import ReusablilityExample from "./views/ReusablilityExample";

Vue.use(Router);

const routes = [
  { path: "/sfc", component: SingleFileComponent },
  { path: "/re", component: ReusablilityExample }
];

export default new Router({
  mode: "history",
  routes
});
