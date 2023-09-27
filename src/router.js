import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('./components/HomeView.vue'),
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('./components/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


