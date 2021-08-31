import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Pendidikan from '../views/Pendidikan.vue'
import Pengalaman from '../views/Pengalaman.vue'
import Kontak from '../views/Kontak.vue'
import Lainnya from '../views/Skill.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/pendidikan',
    name: 'Pendidikan',
    component: Pendidikan
  },
  {
    path: '/pengalaman',
    name: 'Pengalaman',
    component: Pengalaman
  },
  {
    path: '/kontak',
    name: 'Kontak',
    component: Kontak
  },
  {
    path: '/skill',
    name: 'Skill',
    component: Lainnya
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
