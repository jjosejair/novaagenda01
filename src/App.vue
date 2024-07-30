<template>
  <div id="app">
    <h1>Meu Aplicativo de Contatos</h1>
    <RouterLink to="/add-contact" class="button button-add">Adicionar Contato</RouterLink>
    <RouterLink to="/contact-list" class="button button-list">Lista de Contatos</RouterLink>
    <router-view
      :contacts="contacts"
      @delete="deleteContact"
      @update-contact="updateContact"
      @add-contact="addContact"
    ></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import database from "./json/contacts.json"

interface Contact {
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
}

export default defineComponent({
  name: 'App',
  data() {
    return {
      contacts: database.contacts as Contact[]
    };
  },
  methods: {
    deleteContact(index: number) {
      this.contacts.splice(index, 1);
    },
    updateContact(index: number, updatedContact: Contact) {
      this.contacts.splice(index, 1, updatedContact);
    },
    addContact(newContact: Contact) {
      this.contacts.push(newContact);
    },
  },
});
</script>

<style>
#app {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.button {
  margin: 5px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  background-color: #4caf50;
  color: white;
}

.button-list {
  background-color: #2196f3;
}

.button-add {
  background-color: #4caf50;
}
</style>