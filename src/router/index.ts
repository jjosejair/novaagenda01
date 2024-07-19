import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import ContactList from '../views/ContactLis.vue';
import AddContact from '../views/AddContac.vue';
import EditContact from '../views/EditContac.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contact-list', component: ContactList, props: true },
  { path: '/add-contact', component: AddContact, props: true },
  { path: '/edit-contact/:index', component: EditContact, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;