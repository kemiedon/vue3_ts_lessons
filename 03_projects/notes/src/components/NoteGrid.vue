<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'
import { storeToRefs } from 'pinia'

const store = useNoteStore()
const { filteredNotes: notes } = storeToRefs(store)
const deleteId = ref<number | null>(null)
function handleDelete(id) {
    deleteId.value = id
  store.deleteNote(id)
}
function confirmDelete() {
    if (deleteId.value !== null) {
        store.deleteNote(deleteId.value)
        deleteId.value = null
        document.getElementById('modal').classList.add('hidden')

    }
}
</script>
<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">所有筆記</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="note in notes" :key="note.id" class="bg-white rounded-lg hover:bg-amber-100 transition-all shadow p-4 flex flex-col">
        <div class="flex items-center mb-2">
          <i class="fa-solid fa-thumbtack text-gray-400 mr-2"></i>
          <span class="font-semibold text-lg">{{ note.title }}</span>
          <p class="font-semibold text-lg">{{ note.content }}</p>
        </div>
        <div class="mt-auto flex justify-end space-x-2">
          <RouterLink :to="{ name: 'EditNote', params: { id: note.id } }" class="text-blue-500 hover:text-blue-700">
            <i class="fa-solid fa-edit"></i>
          </RouterLink>
          <a @click="handleDelete(note.id)" class="text-gray-500 hover:text-gray-700">
            <i class="fa-solid fa-trash"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div id="modal" class="hidden fixed inset-0 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">是否刪除</h2>
        <button @click="document.getElementById('modal').classList.add('hidden')" class="bg-transparent text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
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


