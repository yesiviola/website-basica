<template>
    <div>
      <h1>¡Bienvenido a la Página de Inicio!</h1>
      <router-link to="/about">Ir a la página principal</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
  };
  </script>
  <style scoped>
  /* Estilos específicos para esta vista */
  h1 {
    color: #333;
  }
  
  router-link {
    color: #007BFF;
  }
  </style>