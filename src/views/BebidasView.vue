<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { bebidas } from '../data/bebidas.js';
import BebidaCard from '../components/BebidaCard.vue';

const catalogo = ref(bebidas);
const router = useRouter();

// Navegación disparada desde JavaScript, no desde un enlace directo[cite: 1]
const irADetalle = (id) => {
  router.push({ name: 'detalle', params: { id: id } });
};
</script>

<template>
  <div>
    <h1>Catálogo de Bebidas</h1>
    <div class="lista-bebidas">
      <!-- Recorrido de listas con su identificador único -->
      <BebidaCard 
        v-for="item in catalogo" 
        :key="item.id" 
        :bebida="item" 
        @verDetalle="irADetalle" 
      />
    </div>
  </div>
</template>