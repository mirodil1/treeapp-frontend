import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import YmapPlugin from 'vue-yandex-maps'

axios.defaults.baseURL = 'https://tree.redapp.uz'

const settings = {
    apiKey: process.env.VUE_APP_YANDEX_MAP_SECRET_KEY,
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
  }

createApp(App).use(store).use(router).use(YmapPlugin, settings).mount('#app')
