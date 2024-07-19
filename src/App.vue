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
      contacts: [
        // Aqui você pode inicializar com alguns contatos de exemplo, se desejar
        { name: 'Contato 1', address: 'Endereço 1', city: 'Cidade 1', phone: '1111-1111', email: 'contato1@exemplo.com' },
        { name: 'Contato 2', address: 'Endereço 2', city: 'Cidade 2', phone: '2222-2222', email: 'contato2@exemplo.com' }
      ] as Contact[],
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