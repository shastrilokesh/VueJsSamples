import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import googleMap from "../components/GoogleMap.vue";
import googleMap2 from "../components/TravelMap.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/map",
    name: "map",
    component: googleMap
  },
  {
    path: "/map2",
    name: "map2",
    component: googleMap2
  }
];

const router = new VueRouter({
  routes
});

export default router;
