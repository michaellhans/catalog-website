import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Home from '@/views/Home.vue'
import Book from '@/webpage/Book.vue'
import Song from '@/webpage/Song.vue'
import Penambahan from '../webpage/Penambahan.vue'
import Login from '@/webpage/auth/Login'
import NotAuthorized from '@/views/NotAuthorized'
import AddAccount from '@/webpage/auth/AddAccount'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/book',
    name: 'BookPage',
    component: Book
  },
  {
    path: '/song',
    name: 'SongPage',
    component: Song
  },
  {
    path: '/add',
    name: 'AddPage',
    component: Penambahan,
    beforeEnter: (to, from, next) => {
      if(!store.state.auth.isLoggedIn) {
        next('/login')
      }
      else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Add account',
    component: AddAccount,
    beforeEnter: (to, from, next) => {
      if(!store.state.auth.isLoggedIn) {
        next('/403')
      }
      else {
        next()
      }
    }
  },
  {
    path: '/403',
    name: '403Page',
    component: NotAuthorized
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
