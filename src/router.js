import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home.vue";
import Welcome from "./Welcome.vue";
import Download from "./Download.vue";
import Packages from "./Packages.vue";
import Terms from "./Terms.vue";
import Privacy from "./Privacy.vue";
import NotFound from "./NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/Download", component: Download },
  { path: "/Packages", component: Packages },
  { path: "/Terms", component: Terms },
  { path: "/Privacy", component: Privacy },
  { path: "/Welcome", component: Welcome },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
