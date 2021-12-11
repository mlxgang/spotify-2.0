import {createApp} from 'vue'
import App from './App.vue'
import {router} from './router/router'
import '@/main.css'

const app = createApp(App).use(router);
app.mount('#app');
