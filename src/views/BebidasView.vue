<script setup>
import { ref, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { bebidas } from '../data/bebidas.js';
import BebidaCard from '../components/BebidaCard.vue';

const route = useRoute();
const router = useRouter();

// Estado del buscador enlazado al query de la URL (si recargan o vienen con ?buscar=...)
const busqueda = ref(route.query.buscar || '');

// Filtrar las bebidas según el texto ingresado
const bebidasFiltradas = computed(() => {
  if (!busqueda.value) return bebidas;
  return bebidas.filter(b => 
    b.nombre.toLowerCase().includes(busqueda.value.toLowerCase()) ||
    b.descripcion.toLowerCase().includes(busqueda.value.toLowerCase())
  );
});

// Sincronizar el input con la URL usando router.replace o push
const actualizarBusqueda = () => {
  router.push({
    name: 'catalogo',
    query: busqueda.value ? { buscar: busqueda.value } : {}
  });
};

// Navegación disparada desde JavaScript
const irADetalle = (id) => {
  router.push({ name: 'detalle', params: { id: id } });
};
</script>

<template>
  <div>
    <h1>Catálogo de Bebidas</h1>
    
    <!-- Campo de formulario enlazado al estado -->
    <div class="buscador-container">
      <input 
        type="text" 
        v-model="busqueda" 
        @input="actualizarBusqueda" 
        placeholder="Buscar bebida..." 
      />
    </div>

    <!-- Estado vacío: mensaje amable si no hay resultados -->
    <div v-if="bebidasFiltradas.length === 0" class="estado-vacio">
      <p>No encontramos ninguna bebida que coincida con tu búsqueda.</p>
      <button @click="busqueda = ''; actualizarBusqueda()">Ver todas las bebidas</button>
    </div>

    <div v-else class="lista-bebidas">
      <BebidaCard 
        v-for="item in bebidasFiltradas" 
        :key="item.id" 
        :bebida="item" 
        @verDetalle="irADetalle" 
      />
    </div>
  </div>
</template>

<style scoped>
.buscador-container {
  margin-bottom: 1.5rem;
}
.buscador-container input {
  padding: 0.5rem;
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.estado-vacio {
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-top: 1rem;
}
</style>