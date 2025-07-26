import { createRouter, createWebHistory } from 'vue-router'
import NoteGrid from '../components/NoteGrid.vue'
import EditNote from '../components/EditNote.vue'
import AddNote from '../components/AddNote.vue'
import SearchNote from '../components/SearchResult.vue'

const routes = [
  {
    path: '/',
    name: 'NoteGrid',
    component: NoteGrid
  },
  {
    path: '/edit/:id',
    name: 'EditNote',
    component: EditNote,
    props: true
  },
  {
    path: '/add',
    name: 'AddNote',
    component: AddNote
  },
  {
    path: '/search',
    name: 'SearchNote',
    component: SearchNote
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
