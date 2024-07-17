import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/Home.vue';
import AddContact from '../components/AddContact.vue';
import EditContact from '../components/EditContact.vue';
import ContactList from '../components/ContactList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/add-contact',
    name: 'AddContact',
    component: AddContact,
  },
  {
    path: '/edit-contact/:index',
    name: 'EditContact',
    component: EditContact,
    props: true,
  },
  {
    path: '/contact-list',
    name: 'ContactList',
    component: ContactList,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
