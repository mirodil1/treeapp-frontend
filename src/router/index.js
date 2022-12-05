import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TreeDetail from '../components/TreeDetail.vue'
import Login from '../views/Login.vue'
import Register from '../views/RegisterView.vue'
import MyProfile from '../views/MyProfileView.vue'

import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/tree/:id',
        component: TreeDetail,
      },
    ],
  },
  {
    path: '/account/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/account/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/account/me',
    name: 'MyProfile',
    component: MyProfile,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next({ name: 'Login', query: { to: to.path } });
  } else {
    next()
  }
})

export default router
