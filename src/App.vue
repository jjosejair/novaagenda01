<template>
  <div id="app">
    <h1>Meu Aplicativo de Contatos</h1>
    <router-view></router-view>
    <RouterLink to="/add-contact">Adicionar Contato</RouterLink>
    <RouterLink to="/contact-list">Lista de Contatos</RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
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

a {
  margin: 5px;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  background-color: #4caf50;
  color: white;
}
</style>