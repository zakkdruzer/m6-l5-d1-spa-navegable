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
    <h3>Costos y Retornabilidad</h3>
    <ul>
      <li><strong>Precio de Venta Sugerido:</strong> ${{ bebida.costos.precioVenta }}</li>
      <li><strong>Descuento por Botella Retornable:</strong> -${{ bebida.costos.descuentoRetornable }}</li>
    </ul>
    <div class="nota-tecnica">
      <h4>Escalamiento Comercial:</h4>
      <p>Al proyectar producciones en lotes de 17 a 18 litros para distribuir en bares y restaurantes locales, recalcular las proporciones de insumos manteniendo estos márgenes base.</p>
    </div>
  </div>
</template>

<style scoped>
.nota-tecnica {
  margin-top: 1.5rem;
  padding: 1rem;
  background-color: #fdfae7;
  border-left: 4px solid #eab308;
}
</style>