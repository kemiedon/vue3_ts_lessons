<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'
import { storeToRefs } from 'pinia'

const store = useNoteStore()
const { notes } = storeToRefs(store)
const router = useRouter()
const deleteId = ref<number | null>(null)

function handleDelete(id) {
    deleteId.value = id
    document.getElementById('modal').classList.remove('hidden')
}

function confirmDelete() {
    if (deleteId.value !== null) {
        store.deleteNote(deleteId.value)
        deleteId.value = null
        document.getElementById('modal').classList.add('hidden')
        router.push({ name: 'NoteGrid' })
    }
}
</script>

<template>
    
  <ul class="list-group divide-y divide-gray-200 bg-white rounded">
    <li v-for="note in notes" :key="note.id" class="flex items-center justify-between px-4 py-2 hover:bg-gray-50">
      <i class="fa-solid fa-thumbtack text-gray-400 mr-3"></i>
      <RouterLink :to="{ name: 'EditNote', params: { id: note.id } }" class="text-blue-500 hover:text-blue-700 mx-1">
        <span class="flex-1 text-gray-800">{{ note.title }}</span>
      </RouterLink>      
      
      <a @click="handleDelete(note.id)" class="btn text-red-500 hover:text-white mx-1">
        <i class="fa-solid fa-trash"></i>
      </a>
    </li>
  </ul>
  <!-- Modal -->
  <div id="modal" class="hidden fixed inset-0 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">是否刪除</h2>
        <button onclick="document.getElementById('modal').classList.add('hidden')" class="bg-transparent text-gray-800 px-4 py-2 rounded-lg transition">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

      </div>
      <p class="text-gray-600 mb-6">確定刪除此筆記錄?</p>
      <div class="flex justify-end">
        <button onclick="document.getElementById('modal').classList.add('hidden')" class="bg-gray-300 text-gray-800 px-4 py-2 mr-2 rounded-lg hover:bg-gray-400 transition">
          取消
        </button>
        <button @click="confirmDelete" class="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
          確定
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
