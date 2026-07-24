<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  bebida: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div v-if="bebida">
    <h3>Proceso de Preparación</h3>
    <p>{{ bebida.preparacion }}</p>
    
    <div class="nota-tecnica">
      <h4>Aviso de Higiene:</h4>
      <p>Para la limpieza de envases de esta tanda, recuerda utilizar la estación de lavado automatizada con la bomba de agua de 0.8 HP y el colector de 12 salidas de PVC para asegurar una presión óptima y desinfección antes del embotellado.</p>
    </div>
  </div>
</template>

<style scoped>
.nota-tecnica {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #eef2f5;
  border-left: 4px solid #3b82f6;
}
</style>