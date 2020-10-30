import { createRouter, createWebHistory } from "vue-router";

import Homepage from "../views/Homepage/Homepage";
import Login from "../views/Login/Login";
import Register from "../views/Register/Register";
import NewArticle from "../views/NewArticle/NewArticle";

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
    meta: { onlyGuest: true }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { onlyGuest: true }
  },
  {
    path: "/new-article",
    name: "NewArticle",
    component: NewArticle,
    meta: { loginRequired: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, _, next) => {
  const isAuthenticated = !!localStorage.getItem("token");
  if (to.matched.some(record => record.meta.onlyGuest)) {
    // If logged in, redirect to home page
    // to avoid re-login / registration.
    if (isAuthenticated) next({ path: "/" });
    else next();
  } else if (to.matched.some(record => record.meta.loginRequired)) {
    // If not logged in, redirect to login
    if (!isAuthenticated) next({ path: "/login" });
    else next();
  } else next();
});

export default router;
