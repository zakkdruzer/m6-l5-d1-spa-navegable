import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // Asegúrate de que la ruta coincida con tu carpeta

const app = createApp(App)
app.use(router)
app.mount('#app')