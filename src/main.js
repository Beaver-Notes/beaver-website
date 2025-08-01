import "./assets/main.css";
import compsUi from "./lib/compos-ui";
import { createApp } from "vue";
import router from './router';
import App from "./App.vue";

createApp(App).use(compsUi).use(router).mount("#app");
