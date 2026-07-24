<script setup>
import { computed } from 'vue';
import { bebidas } from '../data/bebidas.js';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

// Buscamos la bebida correspondiente de forma reactiva al prop id
const bebidaActual = computed(() => {
  return bebidas.find(b => b.id === props.id);
});
</script>

<template>
  <!-- Si la bebida existe -->
  <div v-if="bebidaActual">
    <h2>{{ bebidaActual.nombre }}</h2>
    <p>{{ bebidaActual.descripcion }}</p>

    <nav class="tabs">
      <router-link :to="{ name: 'preparacion', params: { id: bebidaActual.id } }">Preparación</router-link> |
      <router-link :to="{ name: 'ingredientes', params: { id: bebidaActual.id } }">Ingredientes</router-link> |
      <router-link :to="{ name: 'costos', params: { id: bebidaActual.id } }">Costos</router-link>
    </nav>

    <div class="tab-content">
      <router-view :bebida="bebidaActual"></router-view>
    </div>
    
    <router-link :to="{ name: 'catalogo' }">← Volver al catálogo</router-link>
  </div>

  <!-- Si piden un identificador que no existe (Mensaje humano y amigable) -->
  <div v-else class="error-inexistente">
    <h2>Oops, esta bebida no existe</h2>
    <p>El identificador <strong>"{{ props.id }}"</strong> no corresponde a ninguna receta en nuestro catálogo.</p>
    <router-link :to="{ name: 'catalogo' }" class="btn-volver">Volver al catálogo seguro</router-link>
  </div>
</template>

<style scoped>
.tabs { margin: 1rem 0; font-weight: bold; }
.tab-content { border: 1px dashed #ccc; padding: 1rem; margin-bottom: 1rem; }
.error-inexistente {
  padding: 2rem;
  text-align: center;
}
.btn-volver {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}
</style>