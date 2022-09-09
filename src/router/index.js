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
    path: '/listings',
    name: 'listings',
    component: () => import( /* webpackChunkName: "about" */ '../views/listings.vue')
  },
  {
    path: '/enquire/:id',
    name: 'enquire',
    component: () => import( /* webpackChunkName: "about" */ '../views/Enquire.vue'),
    props: true
  },
  {
  path: '/userinfo/:id',
  name: 'userinfo',
  component: () => import( /* webpackChunkName: "about" */ '../views/Userinfo.vue'),
 

},
{
  path: '/admin',
  name: 'admin',
  component: () => import( /* webpackChunkName: "about" */ '../views/admin.vue')
},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router