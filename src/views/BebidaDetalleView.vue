<script setup>
import { computed } from 'vue';
import { bebidas } from '../data/bebidas.js';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

// Buscamos la bebida correspondiente
const bebidaActual = computed(() => {
  return bebidas.find(b => b.id === props.id);
});
</script>

<template>
  <div v-if="bebidaActual">
    <h2>{{ bebidaActual.nombre }}</h2>
    <p>{{ bebidaActual.descripcion }}</p>

    <!-- Navegación de las pestañas -->
    <nav class="tabs">
      <router-link :to="{ name: 'preparacion', params: { id: bebidaActual.id } }">Preparación</router-link> |
      <router-link :to="{ name: 'ingredientes', params: { id: bebidaActual.id } }">Ingredientes</router-link> |
      <router-link :to="{ name: 'costos', params: { id: bebidaActual.id } }">Costos</router-link>
    </nav>

    <!-- El hueco donde se dibujan las vistas de las pestañas -->
    <div class="tab-content">
      <router-view :bebida="bebidaActual"></router-view>
    </div>
    
    <router-link :to="{ name: 'catalogo' }">← Volver al catálogo</router-link>
  </div>
  <div v-else>
    <h2>Bebida no encontrada</h2>
    <router-link :to="{ name: 'catalogo' }">← Volver al catálogo</router-link>
  </div>
</template>

<style scoped>
.tabs { margin: 1rem 0; font-weight: bold; }
.tab-content { border: 1px dashed #ccc; padding: 1rem; margin-bottom: 1rem; }
</style>