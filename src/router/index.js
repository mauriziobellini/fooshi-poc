import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/Cart'
import Shop from '../views/Shop'
import CheckoutSummary from '../views/CheckoutSummary'

const routes = [
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/checkout-summary',
    name: 'CheckoutSummary',
    component: CheckoutSummary,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
