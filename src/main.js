import './assets/tailwind.css';
import { createApp } from 'vue'
import App from './App.vue'
import { Icon } from "@iconify/vue";
import scroll from './directives/scroll';
import theme from './scripts/theme';

const app = createApp(App)
app.component('v-icon',Icon)
app.directive('scroll',scroll);
app.mount("#app");

