import { createRouter, createWebHistory } from 'vue-router'
import LifeCircle from '../components/LifeCircle.vue'
import Computed from '../components/Computed.vue'
import DataBinding from '../components/DataBinding.vue'
import MyButton from '../components/MyButton.vue'
import Watch from '../components/Watch.vue'
import WatchEffect from '../components/WatchEffect.vue'
import Events from '../components/Events.vue'

const routes = [
    {
        path: '/',
        name: 'LifeCircle',
        component: LifeCircle
    },
    {
        path: '/computed',
        name: 'Computed',
        component: Computed
    },
    {
        path: '/data_binding',
        name: 'DataBinding',
        component: DataBinding
    },
    {
        path: '/my_button',
        name: 'MyButton',
        component: MyButton
    },
    {
        path: '/watch',
        name: 'Watch',
        component: Watch
    },
    {
        path: '/watch_effect',
        name: 'WatchEffect',
        component: WatchEffect
    },
    {
        path: '/events',
        name: 'Events',
        component: Events
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router