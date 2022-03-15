import { createRouter, createWebHashHistory } from 'vue-router'
import toyApp from '../views/toy-app.vue'
import toyDetails from '../views/toy-details.vue'
import toyEdit from '../views/toy-edit.vue'
import toyDashboard from '../views/toy-dashboard.vue'
import about from '../views/about.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/toy',
      name: 'App',
      component: toyApp
    },
    {
      path: '/toy/:toyId',
      name: 'toyDetails',
      component: toyDetails
    },
    {
      path: '/toy/edit/:toyId?',
      name: 'toyEdit',
      component: toyEdit
    },
    {
      path: '/toy/dashboard',
      name: 'toyDashboard',
      component: toyDashboard
    },
    {
      path: '/about',
      name: 'aboutPage',
      component: about
    }
  ]
})

export default router
