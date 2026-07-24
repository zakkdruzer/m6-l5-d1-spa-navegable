<script setup>
import { ref, computed } from 'vue';
import { bebidas } from '../data/bebidas.js';
import DetallePreparacion from './DetallePreparacion.vue';
import DetalleIngredientes from './DetalleIngredientes.vue';
import DetalleCostos from './DetalleCostos.vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

// Pestaña activa por defecto ('preparacion', 'ingredientes', 'costos')
const pestañaActiva = ref('preparacion');

const bebidaActual = computed(() => {
  return bebidas.find(b => b.id === props.id);
});
</script>

<template>
  <div v-if="bebidaActual">
    <h2>{{ bebidaActual.nombre }}</h2>
    <p>{{ bebidaActual.descripcion }}</p>

    <!-- Botones de pestañas locales -->
    <nav class="tabs">
      <button 
        :class="{ active: pestañaActiva === 'preparacion' }" 
        @click="pestañaActiva = 'preparacion'"
      >Preparación</button> |
      <button 
        :class="{ active: pestañaActiva === 'ingredientes' }" 
        @click="pestañaActiva = 'ingredientes'"
      >Ingredientes</button> |
      <button 
        :class="{ active: pestañaActiva === 'costos' }" 
        @click="pestañaActiva = 'costos'"
      >Costos</button>
    </nav>

    <!-- Contenido dinámico según la pestaña seleccionada -->
    <div class="tab-content">
      <DetallePreparacion v-if="pestañaActiva === 'preparacion'" :bebida="bebidaActual" />
      <DetalleIngredientes v-else-if="pestañaActiva === 'ingredientes'" :bebida="bebidaActual" />
      <DetalleCostos v-else-if="pestañaActiva === 'costos'" :bebida="bebidaActual" />
    </div>
    
    <router-link :to="{ name: 'catalogo' }" class="btn-volver">← Volver al catálogo</router-link>
  </div>

  <div v-else class="error-inexistente">
    <h2>Oops, esta bebida no existe</h2>
    <p>El identificador <strong>"{{ props.id }}"</strong> no corresponde a ninguna receta en nuestro catálogo.</p>
    <router-link :to="{ name: 'catalogo' }" class="btn-volver">Volver al catálogo seguro</router-link>
  </div>
</template>

<style scoped>
.tabs {
  margin: 1rem 0;
}
.tabs button {
  background: none;
  border: none;
  color: #2563eb;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
}
.tabs button.active {
  text-decoration: underline;
  color: #1d4ed8;
}
.tab-content { 
  border: 1px dashed #ccc; 
  padding: 1rem; 
  margin-bottom: 1rem; 
  border-radius: 6px;
}
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