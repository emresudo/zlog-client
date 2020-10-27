import { createRouter, createWebHistory } from "vue-router";

import Homepage from "../views/Homepage/Homepage";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";

const routes = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/tag/:tag",
    name: "tags",
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
