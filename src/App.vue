<script setup>
</script>

<template>
  <header>
    <nav aria-label="Menú principal">
      <router-link :to="{ name: 'catalogo' }">Catálogo de Bebidas</router-link> | 
      <router-link :to="{ name: 'sobre-nosotros' }">Sobre Nosotros</router-link>
    </nav>
  </header>

  <main>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
  </main>
</template>

<style scoped>
header {
  margin-bottom: 2rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
}
</style>