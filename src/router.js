import Vue from "vue";
import Router from "vue-router";
import SingleFileComponent from "./views/SingleFileComponent";
import ReusablilityExample from "./views/ReusablilityExample";

Vue.use(Router);

const routes = [
  { path: "/component", component: SingleFileComponent },
  { path: "/reusability", component: ReusablilityExample }
];

export default new Router({
  mode: "history",
  routes
});
