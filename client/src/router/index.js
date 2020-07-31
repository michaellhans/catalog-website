import Vue from 'vue'
import Router from 'vue-router'
import Book from '../webpage/Book.vue'
import Song from '../webpage/Song.vue'
import Penambahan from '../webpage/Penambahan.vue'
import Login from '@/webpage/auth/Login'
import AddAccount from '@/webpage/auth/AddAccount'

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
    name: 'Add account',
    component: AddAccount
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
