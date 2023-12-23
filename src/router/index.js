import { createRouter, createWebHistory } from 'vue-router'
import FamilyView from '../views/family/FamilyView.vue'
import HomeView from '../views/home/HomeView.vue'
import SportsView from '../views/sports/SportsView.vue'
import UserView from '../views/user/UserView.vue'
import NotFound from '../views/error/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/home/'
  },
  {
      path: '/home/',
      name: 'home',
      component: HomeView
  },
  {
      path: '/family/',
      name: 'family',
      component: FamilyView
  },
  {
      path: '/sports/',
      name: 'sports',
      component: SportsView
  },
  {
      path: '/user/',
      name: 'user',
      component: UserView
  },
  {
    path:'/404/',
    name: '404',
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
