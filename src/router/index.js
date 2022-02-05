import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import MatchHistory from '../components/match-history'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/match-history',
    name: 'match-history',
    component: MatchHistory
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
