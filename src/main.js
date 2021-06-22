import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { setupAntd } from "./plugins/index"
import createGuard from "./router/guard/index";
const app = createApp(App);
setupAntd(app);
app.use(router);
createGuard(router);
app.mount('#app')
