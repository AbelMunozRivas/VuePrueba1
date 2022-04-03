import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import Cuerpo from "./components/icons/Cuerpo.vue"
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");


