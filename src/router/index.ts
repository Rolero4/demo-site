import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: HomeView,
  },
  { path: "/", redirect: "/home" },
  { path: "/:pathMatch(.*)*", redirect: "/home" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
