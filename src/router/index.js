import { createRouter, createWebHashHistory } from 'vue-router'
import toyApp from '../views/toy-app.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'App',
      component: toyApp
    }
  ]
})

export default router
