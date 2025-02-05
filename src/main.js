import { createApp } from 'vue'
import routes from './routes/router.api';
import './style.css'
import App from './App.vue'

createApp(App).use(routes).mount('#app')
