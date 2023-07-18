import LoginPage from "@/components/LoginPage.vue";
import VueRouter from "vue-router";
const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
];
export default new VueRouter({
  mode: "history",
  routes,
});
