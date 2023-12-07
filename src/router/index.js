import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactIndex from '../views/ContactIndex.vue'
import ContactDetail from '../views/ContactDetail.vue'
import ContactEdit from '../views/ContactEdit.vue'
import Statistisc from '../views/Statistisc.vue'
import LoginSignUp from '../views/LoginSignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactIndex
    },
    {
      path: '/contact/:id',
      name: 'detail',
      component: ContactDetail
    },
    {
      path: '/contact/edit/:id?',
      name: 'edit/add',
      component: ContactEdit
    },
    {
      path: '/chart',
      name: 'statistisc',
      component: Statistisc
    },
    {
      path: '/signup',
      name: 'signup',
      component: LoginSignUp
    }
  ]
})

export default router
