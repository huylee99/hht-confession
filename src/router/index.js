import { createRouter, createWebHistory } from 'vue-router';
import { adminAuth } from '../firebase/config';
import Home from '../views/Home.vue';
import Admin from '../views/Admin.vue';
import Login from '../views/Login.vue';

// authentication

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = adminAuth.currentUser;
      if (!isAuthenticated) next({ name: 'Login' });
      else next();
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = adminAuth.currentUser;
      if (isAuthenticated) next({ name: 'Admin' });
      else next();
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
