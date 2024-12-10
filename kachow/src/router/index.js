import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '@/views/AuthPage.vue';
import ProfilePage from '@/views/ProfilePage.vue';
import FirstConnection from '@/views/FirstConnectionPage.vue';
import Swipes from '@/views/SwipesPage.vue';
import Messages from '@/views/MessagesPage.vue';


const routes = [
  { path: '/', redirect: '/auth' },
  { path: '/auth', component: AuthPage },
  { path: '/profile', component: ProfilePage },
  { path: '/first-connection', component: FirstConnection },
  { path: '/swipes', component: Swipes },
  { path: '/messages', component: Messages },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
