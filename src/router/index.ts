import { RouteRecordRaw } from 'vue-router';
import { RouterOptions } from 'vite-ssg';

const routes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/HomePage/index.vue'),
  },
  {
    name: 'userAccessLevels',
    path: '/user-access-levels',
    component: () => import('@/views/userAccessLevels/index.vue'),
  },
];

export const options = (): RouterOptions => ({
  base: import.meta.env.BASE_URL,
  routes,
});

export default options();
