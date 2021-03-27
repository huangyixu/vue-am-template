import { createApp } from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

// ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)

app.config.globalProperties.$store = store

app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
