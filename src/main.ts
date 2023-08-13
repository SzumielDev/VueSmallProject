import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';
import New from './components/New.vue';
import Contact from './components/Contact.vue';
import ObjectDetails from './components/ObjectDetails.vue';
import Register from './components/Register.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/new', component: New },
  { path: '/contact', component: Contact },
  { path: '/object/:id', component: ObjectDetails, props: true },
  { path: '/register', component: Register },
  { path: '/:notFound(.*)', redirect: '/home'}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app');