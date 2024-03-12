import { createRouter, createWebHistory } from "vue-router";
/* ---- components ---- */
import UserAuth from "../views/UserAuth.vue";
import Home from "../views/Home.vue";
import ProductsPage from "../views/ProductsPage.vue";
import EmployeesPage from "../views/EmployeesPage.vue";
import MainLayout from "../layouts/MainLayout.vue";
/* ---- ---- ---- */
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        { path: "/home", component: Home, name: "home" },
        { path: "/products", name: "products", component: ProductsPage },
        { path: "/employees", name: "employees", component: EmployeesPage },
      ],
    },

    {
      path: "/auth",
      name: "auth",
      component: UserAuth,
    },
  ],
});

export default router;
