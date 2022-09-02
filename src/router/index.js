import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/listings',
    name: 'listings',
    component: () => import( /* webpackChunkName: "about" */ '../views/listings.vue')
  },
  {
    path: '/enquire/:id',
    name: 'enquire',
    component: () => import( /* webpackChunkName: "about" */ '../views/Enquire.vue')
  },
  {
  path: '/userinfo/:id',
  name: 'userinfo',
  component: () => import( /* webpackChunkName: "about" */ '../views/Userinfo.vue')
},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router