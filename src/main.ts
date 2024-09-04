import { addIcons, OhVueIcon } from "oh-vue-icons";
import {
  BiChevronDown,
  BiChevronUp,
  HiArrowDown,
  HiArrowUp,
  HiLightningBolt,
} from "oh-vue-icons/icons";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles/tailwind.scss";

addIcons(HiLightningBolt, HiArrowDown, HiArrowUp, BiChevronDown, BiChevronUp);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
