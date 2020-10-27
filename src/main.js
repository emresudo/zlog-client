import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import toast from "vue-toastification";

import "./assets/tailwind.css";
import "vue-toastification/dist/index.css";

const toastConfig = {
  position: "top-right",
  timeout: 4000
};

createApp(App)
  .use(toast, toastConfig)
  .use(store)
  .use(router)
  .mount("#zlog");
