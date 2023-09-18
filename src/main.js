import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import Toaster from '@meforma/vue-toaster';
import App from './App.vue'
import router from './router'


createApp(App).use(router).use(Toaster).mount('#app')
