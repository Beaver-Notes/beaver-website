import "./assets/main.css";
import compsUi from "./lib/compos-ui";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(compsUi).mount("#app");
