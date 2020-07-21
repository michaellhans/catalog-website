import Vue from 'vue'
import Router from 'vue-router'
import Book from '../webpage/Book.vue'
import Songs from '../webpage/Songs.vue'
import Penambahan from '../webpage/Penambahan.vue'

Vue.use(Router)

const routes = [
  {
    path: '/Books',
    name: 'BookPage',
    component: Book
  },
  {
    path: '/Songs',
    name: 'SongsPage',
    component: Songs
  },
  {
    path: '/Add',
    name: 'AddPage',
    component: Penambahan
  }
]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
