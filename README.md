# Catálogo de Bebidas Artesanales (SPA con Vue Router)

Aplicación web de una sola página (SPA) desarrollada con **Vue 3**, **Vite**, **Vue Router** y **Composition API** (<script setup>), construida como parte de las actividades del bootcamp front-end.

## 🚀 Características principales
* **Navegación fluida sin recargas**: Implementada con Vue Router y manejo de historial por hash (`createWebHashHistory`) para garantizar compatibilidad total con despliegues estáticos como GitHub Pages.
* **Catálogo interactivo**: Listado completo de bebidas artesanales con búsqueda en tiempo real sincronizada con los parámetros de la URL (`query params`).
* **Fichas de detalle dinámicas**: Vistas individuales para cada producto basadas en parámetros de ruta (`/:id`), con manejo robusto de identificadores inexistentes y vista de error 404 personalizada.
* **Componentes reutilizables y estructurados**: Separación clara entre vistas principales, componentes de tarjetas e información modularizada.
* **Accesibilidad y diseño**: Enlaces activos automáticos según la ruta actual, soporte para navegación por teclado (`Tab`) y estilos adaptados para una lectura cómoda.

## 🛠️ Tecnologías utilizadas
* [Vue 3](https://vuejs.org/) (Composition API)
* [Vue Router 4](https://router.vuejs.org/)
* [Vite](https://vitejs.dev/)
* JavaScript (ES6+)
* CSS3 / HTML5 semántico

## 📦 Instalación y ejecución local

Sigue estos pasos para clonar y ejecutar el proyecto en tu máquina local:

1. **Clona el repositorio**
   ```bash
   git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)

2. **Entra al directorio del proyecto**
   ```bash
   cd nombre-del-repo

3. **Instala las dependencias**
   ```bash
   npm install

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev

5. **Abre tu navegador en la URL local que muestra la terminal (generalmente http://localhost:5173/).**

## 🚢 Despliegue en GitHub Pages

Para publicar esta aplicación en GitHub Pages, el proyecto cuenta con soporte para gh-pages:

1. **Asegúrate de configurar la propiedad base en tu archivo vite.config.js:**

   ```JavaScript
   export default defineConfig({
     plugins: [vue()],
     base: '/nombre-del-repo/',
   })
   
2. **Ejecuta el comando de despliegue automatizado**:

   ```Bash
   npm run deploy


## Puedes ver el resultado en:

https://zakkdruzer.github.io/m6-l5-d1-spa-navegable/#/bebidas
