import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
const login = () => import("../views/login/loginindex");

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/login",
  },
  { path: "/login", name: "login", component: login },
];

const router = createRouter({
  mode: 'hash',
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
