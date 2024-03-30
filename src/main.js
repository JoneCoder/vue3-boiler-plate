import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '@/assets/css/app.css'
import 'flowbite';
import App from '@/App.vue'

/**
 * Routers
 **/
import router from "@/router"

/**
 * Plugins
 **/
import toast from "@/plugins/toast"
import filters from "@/plugins/filters"

/**
 * Mixins
 **/
import global from "@/mixins/global"
import crud from "@/mixins/crud"
import utils from "@/mixins/utils"

/**
 * App initial
 **/
const app = createApp(App);

app.config.globalProperties.root = {
    endpoint: import.meta.env.VITE_ENDPOINT,
    spinner : false,
    tableSpinner : false,
    validation_errors: {},
    exception_errors: {},
    submit : false,
}
app.mixin(global)
app.mixin(crud)
app.mixin(utils)
app.use(toast)
app.use(filters)
app.use(createPinia())
app.use(router)

app.mount('#app');
