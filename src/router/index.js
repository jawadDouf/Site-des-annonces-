import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthentificationView from '../views/AuthentificationView.vue'
import DemandesView from '../views/DemandesView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
   path : '/AuthentificationView.vue',
   name : 'AuthentificationView',
   component : AuthentificationView
  },
  {
    path : '/DemandesView.vue',
    name : 'DemandesView',
    component : DemandesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
