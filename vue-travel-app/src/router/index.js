import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "../views/DestinationDetails"
      ),
  },
];

const router = new VueRouter({
  mode: "history", // make URL look normal without "#" sign
  linkExactActiveClass: "vue-school-sctive-class",
  routes,
});

export default router;
