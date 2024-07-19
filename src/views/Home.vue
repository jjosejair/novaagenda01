<template>
  <div class="home">
    <h1>Bem-vindo à Aplicação de Contatos</h1>
    <RouterLink to="/contact-list">Ver Lista de Contatos</RouterLink>
    <RouterLink to="/add-contact">Adicionar Novo Contato</RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
});
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

a {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>

