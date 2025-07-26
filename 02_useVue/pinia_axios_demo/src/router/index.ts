import { createRouter, createWebHistory } from 'vue-router'
import PiniaDemo from '../views/PiniaDemo.vue'
import AxiosDemo from '../views/AxiosDemo.vue'

const routes = [
  {
    path: '/',
    redirect: '/pinia'
  },
  {
    path: '/pinia',
    name: 'PiniaDemo',
    component: PiniaDemo
  },
  {
    path: '/axios',
    name: 'AxiosDemo',
    component: AxiosDemo
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
