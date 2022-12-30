import { createApp, Vue } from "vue";
import App from "./App.vue";
import "./assets/scss/index.scss";
import VueRouter from "vue-router";

Vue.use(VueRouter);

createApp(App).mount("#app");
