import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventShow from "../views/EventShow.vue";
import EventList from "../views/EventList.vue";
import DyRoute from "../views/DynamicRoute.vue";
import EventCard from "../components/EventCard.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props:true
  },
  {
    path: "/event/create",
    name: "event-create",
   component: EventCreate
  },
  {
    path: "/user/:username",
    name: "user",
    component: DyRoute,
    props: true
  },
  {
    path: "/event/card",
    name: "eventcard",
    component: EventCard

  }
];

const router = new VueRouter({
  routes
});

export default router;
