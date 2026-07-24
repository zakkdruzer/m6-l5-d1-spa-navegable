import { createRouter, createWebHashHistory } from 'vue-router'
import BebidasView from '../views/BebidasView.vue'
import BebidaDetalleView from '../views/BebidaDetalleView.vue'
import SobreNosotrosView from '../views/SobreNosotrosView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    redirect: '/bebidas'
  },
  {
    path: '/bebidas',
    name: 'catalogo',
    component: BebidasView,
    alias: ['/productos', '/lista']
  },
  {
    path: '/bebida/:id',
    name: 'detalle',
    component: BebidaDetalleView,
    props: true
  },
  {
    path: '/sobre-nosotros',
    name: 'sobre-nosotros',
    component: SobreNosotrosView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHashHistory(), // Usamos Hash History para compatibilidad total con GitHub Pages
  routes
})

export default router