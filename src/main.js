import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/styles.css'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import VueGoogleMaps from '@fawmi/vue-google-maps'
// app.use(VueGoogleMaps, {
//     load: {
//        key: 'YOUR_API_KEY_COMES_HERE',
//     },
//  })
const app = createApp(App)

app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
