import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import YmapPlugin from 'vue-yandex-maps'

axios.defaults.baseURL = 'http://127.0.0.1:8000/'
const settings = {
    apiKey: 'd4613343-3ef8-4be9-8822-deb1dcdfb779',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
  }

createApp(App).use(store).use(router).use(YmapPlugin, settings).mount('#app')
