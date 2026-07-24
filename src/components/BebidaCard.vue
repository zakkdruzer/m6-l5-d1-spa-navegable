<script setup>
import { defineProps, defineEmits } from 'vue';

// Recibimos los datos de la bebida como propiedad
const props = defineProps({
  bebida: {
    type: Object,
    required: true
  }
});

// Emitimos un evento hacia el padre al hacer clic
const emit = defineEmits(['verDetalle']);

const handleClick = () => {
  emit('verDetalle', props.bebida.id);
};
</script>

<template>
  <div class="card" @click="handleClick">
    <h3>{{ bebida.nombre }}</h3>
    <p>{{ bebida.descripcion }}</p>
    <button>Ver detalles</button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.card:hover {
  background-color: #f9f9f9;
}
</style>