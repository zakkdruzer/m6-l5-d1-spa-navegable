<template>
  <div class="not-found">
    <h1>404</h1>
    <h2>Página no encontrada</h2>
    <p>Parece que te has perdido en el proceso de fermentación.</p>
    <router-link :to="{ name: 'catalogo' }">Volver a la página principal</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 3rem;
}
.not-found h1 {
  font-size: 5rem;
  color: #ef4444;
  margin-bottom: 0;
}
</style>