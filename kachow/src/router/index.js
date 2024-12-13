import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '@/views/AuthPage.vue';
import FirstConnectionPage from '@/views/FirstConnectionPage.vue';
import MessagePage from '@/views/MessagesPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import SwipesPage from '@/views/SwipesPage.vue';

const routes = [
  { path: '/', redirect: '/auth' },
  { path: '/auth', component: AuthPage },
  { path: '/first-connection', component: FirstConnectionPage },
  { path: '/messages', component: MessagePage },
  { path: '/profile', component: ProfilePage },
  { path: '/swipe', component: SwipesPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
