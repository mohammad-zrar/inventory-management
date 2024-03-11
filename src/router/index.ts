import { createRouter, createWebHistory } from "vue-router";
/* ---- components ---- */
import UserAuth from "../views/UserAuth.vue";
import Home from "../views/Home.vue";
/* ---- ---- ---- */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },

    {
      path: "/auth",
      name: "auth",
      component: UserAuth,
    },
  ],
});

export default router;
