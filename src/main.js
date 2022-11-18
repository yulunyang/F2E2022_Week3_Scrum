import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import '@/assets/font/fonts.css'
import '@/assets/main.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'
export const app = createApp(App)

app.AOS = new AOS.init()
app.use(store).use(router).use(AOS).mount('#app')
