import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TreeDetail from '../components/TreeDetail.vue'
import Login from '../views/Login.vue'
import Register from '../views/RegisterView.vue'
import MyProfile from '../views/MyProfileView.vue'
import NotFound from '../views/NotFound.vue'

import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'tree/:id',
        name: 'TreeDetail',
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
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
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
