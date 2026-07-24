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
    <h3>Ingredientes Principales</h3>
    <ul>
      <!-- Recorrido de listas -->
      <li v-for="(ingrediente, index) in bebida.ingredientes" :key="index">
        {{ ingrediente }}
      </li>
    </ul>
  </div>
</template>