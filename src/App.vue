<script setup>
// Lógica vacía por ahora
</script>

<template>
  <header>
    <nav>
      <!-- Navegación por nombre de ruta -->
      <router-link :to="{ name: 'catalogo' }">Catálogo de Bebidas</router-link> | 
      <router-link :to="{ name: 'sobre-nosotros' }">Sobre Nosotros</router-link>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style>
/* Estilo básico para probar que funciona */
nav {
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f0f0f0;
}
</style>