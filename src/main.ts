import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import '@/assets/scss/main.scss';
import overflowTooltip from "./directives/overflowTooltip";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .directive("overflow-tooltip", overflowTooltip)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
