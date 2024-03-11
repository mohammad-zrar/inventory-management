import { createRouter, createWebHistory } from "vue-router";
/* ---- components ---- */
import UserAuth from "../views/UserAuth.vue";
import Home from "../views/Home.vue";
import MainLayout from "../layouts/MainLayout.vue";
/* ---- ---- ---- */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [{ path: "/home", component: Home, name: "home" }],
    },

    {
      path: "/auth",
      name: "auth",
      component: UserAuth,
    },
  ],
});

export default router;
