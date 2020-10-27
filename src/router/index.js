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
    component: Login,
    meta: { loggedInProtection: true }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { loggedInProtection: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, _, next) => {
  if (to.matched.some(record => record.meta.loggedInProtection)) {
    const isAuthenticated = !!localStorage.getItem("token");
    if (isAuthenticated) {
      next({ path: "/" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
