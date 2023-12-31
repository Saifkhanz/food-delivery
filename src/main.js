import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router/routes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
