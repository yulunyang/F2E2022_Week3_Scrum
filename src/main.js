import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import '@/assets/font/fonts.css'
import '@/assets/main.scss'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

export const app = createApp(App)

app.AOS = new AOS.init()
app.use(store).use(router).use(AOS).use(Vue3Lottie).mount('#app')
