import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './styles/styles.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'

// Styles
import "./styles/styles.scss";

const app = createApp(App)
app.use(VueGoogleMaps, {
    load: {
       key: 'AIzaSyAAyhnkylB4smfq032I0ART-zfPjbYdzsE',
    },
 })

app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
