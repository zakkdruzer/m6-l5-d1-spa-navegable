import { createRouter, createWebHistory } from 'vue-router'
import BebidasView from '../views/BebidasView.vue'
import BebidaDetalleView from '../views/BebidaDetalleView.vue'
import DetallePreparacion from '../views/DetallePreparacion.vue'
import DetalleIngredientes from '../views/DetalleIngredientes.vue'
import SobreNosotrosView from '../views/SobreNosotrosView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    redirect: '/bebidas' // Redirect
  },
  {
    path: '/bebidas',
    name: 'catalogo',
    component: BebidasView, // Ruta estática
    alias: ['/productos', '/lista'] // Alias (mínimo dos)
  },
  {
    path: '/bebida/:id',
    name: 'detalle',
    component: BebidaDetalleView, // Ruta dinámica
    props: true, // Recibe identificador como propiedad
    children: [
      {
        path: '', // Primera pestaña (default)
        name: 'preparacion',
        component: DetallePreparacion
      },
      {
        path: 'ingredientes', // Segunda pestaña
        name: 'ingredientes',
        component: DetalleIngredientes
      },
      {
        path: 'costos', // Tercera pestaña
        name: 'costos',
        component: () => import('../views/DetalleCostos.vue') // Ejemplo de componente creado en línea si te falta uno
      }
    ]
  },
  {
    path: '/sobre-nosotros',
    name: 'sobre-nosotros',
    component: SobreNosotrosView // Ruta estática
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView // 404
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router