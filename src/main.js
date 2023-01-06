import Store from './store/index'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import Router from './router/index'
import '@/vue-loading-overlay/css/index.css'
import VueClickAway from '@/vue3-click-away'

createApp(App).use(Router).use(Store).use(VueClickAway).mount('#app')
