<template>
  <div class="container mx-auto p-6">
    <h2 class="text-2xl font-bold mb-4">搜尋結果</h2>
    <div v-if="searchResults.length === 0" class="text-gray-500">查無結果</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="note in searchResults" :key="note.id" class="bg-white rounded-lg shadow p-4 flex flex-col">
        <div class="flex items-center mb-2">
          <i class="fa-solid fa-thumbtack text-gray-400 mr-2"></i>
          <span class="font-semibold text-lg">{{ note.title }}</span>
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
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'

const store = useNoteStore()
const { searchResults } = storeToRefs(store)
</script>
