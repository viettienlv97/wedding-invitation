import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueLazyload from 'vue-lazyload'

const app = createApp(App)

const loadimage = require('./assets/loading.svg')
const errorimage = require('./assets/error.png')
app.use(VueLazyload, {
    preLoad: 1.3,
    error: errorimage,
    loading: loadimage,
    attempt: 1
})

app.mount('#app')
