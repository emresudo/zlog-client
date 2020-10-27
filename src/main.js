import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import toast, { POSITION } from "vue-toastification";

import "./assets/tailwind.css";
import "vue-toastification/dist/index.css";

const toastConfig = {
  position: POSITION.TOP_RIGHT,
  timeout: 4000
};

createApp(App)
  .use(toast, toastConfig)
  .use(store)
  .use(router)
  .mount("#zlog");
