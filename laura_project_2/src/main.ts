import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import FloatingVue from 'floating-vue'

const app = createApp(App)

app.use(router)

app.mount('#app')
app.use(FloatingVue)
