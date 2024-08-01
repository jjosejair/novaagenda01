<template>
  <div class="add-contact-container">
    <div class="add-contact-box">
      <h2 class="add-contact-title">Adicionar Contato</h2>
      <form @submit.prevent="submit" class="add-contact-form">
        <div class="form-group">
          <label for="name" class="form-label">Nome:</label>
          <input
            type="text"
            id="name"
            v-model="newContact.name"
            class="form-input"
            placeholder="Digite seu nome"
          />
        </div>
        <div class="form-group">
          <label for="address" class="form-label">Endereço:</label>
          <input
            type="text"
            id="address"
            v-model="newContact.address"
            class="form-input"
            placeholder="Digite seu endereço"
          />
        </div>
        <div class="form-group">
          <label for="city" class="form-label">Cidade:</label>
          <input
            type="text"
            id="city"
            v-model="newContact.city"
            class="form-input"
            placeholder="Digite sua cidade"
          />
        </div>
        <div class="form-group">
          <label for="phone" class="form-label">Telefone:</label>
          <input
            type="text"
            id="phone"
            v-model="newContact.phone"
            class="form-input"
            placeholder="Digite seu telefone"
          />
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email:</label>
          <input
            type="text"
            id="email"
            v-model="newContact.email"
            class="form-input"
            placeholder="Digite seu email"
          />
        </div>
        <div class="form-actions">
          <RouterLink to="/contact-list" class="button button-cancel">Cancelar</RouterLink>
          <button type="submit" class="button button-save">Salvar</button>
        </div>
      </form>
    </div>
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
  name: 'AddContact',
  data() {
    return {
      newContact: {
        name: '',
        address: '',
        city: '',
        phone: '',
        email: '',
      } as Contact,
    };
  },
  methods: {
    submit() {
      const userObject = {
        name: this.newContact.name,
        address: this.newContact.address,
        city: this.newContact.city,
        phone: this.newContact.phone,
        email: this.newContact.email,
      };

      // Log the userObject to the console
      console.log('User Object:', userObject);

      // Recuperar os contatos existentes do localStorage
      let contacts = JSON.parse(localStorage.getItem('contacts') ?? '[]');
      
      // Adicionar o novo contato à lista
      contacts.push(userObject);
      
      // Salvar a lista atualizada de volta no localStorage
      localStorage.setItem('contacts', JSON.stringify(contacts));
      
      // Emite o evento para atualizar a lista de contatos na aplicação
      this.$emit('add-contact', userObject);

      // Redirecionar para a lista de contatos
      this.$router.push('/contact-list');
    },
  },
});
</script>

<style scoped>
.add-contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.add-contact-box {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.add-contact-title {
  text-align: center;
  margin-bottom: 20px;
}

.add-contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  margin-bottom: 5px;
}

.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-cancel {
  background: #f44336;
  color: white;
}

.button-save {
  background: #4caf50;
  color: white;
}
</style>