import Vue from 'vue'
import Router from 'vue-router'
import Book from '../webpage/Book.vue'
import Song from '../webpage/Song.vue'
import Penambahan from '../webpage/Penambahan.vue'
import Login from '@/webpage/auth/Login'
import Register from '@/webpage/auth/Register'

Vue.use(Router)

const routes = [
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
    component: Penambahan
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
