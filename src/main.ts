import { addIcons, OhVueIcon } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/tailwind.scss";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
