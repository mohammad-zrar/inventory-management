import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router/index.ts";
import { createPinia } from "pinia";
/* ---- Quasar ---- */
import { Quasar, Dialog } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
/* ---- ---- ---- */

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(Quasar, {
  plugins: {
    Dialog,
  }, // Import Quasar plugins and add here
});

app.mount("#app");
