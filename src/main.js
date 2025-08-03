import "./assets/main.css";
import compsUi from "./lib/compos-ui";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

router.afterEach((to) => {
  if (window.umami) {
    window.umami.track((props) => ({
      ...props,
      url: to.fullPath,
      title: document.title,
    }));
  }
});

createApp(App).use(compsUi).use(router).mount("#app");
