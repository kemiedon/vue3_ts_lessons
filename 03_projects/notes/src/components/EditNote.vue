<template>
  <div class="container mx-auto max-w-full p-6">
    <h2 class="text-2xl text-left font-bold mb-4">編輯筆記</h2>
    <div v-if="showSuccess" class="bg-green-600 text-white text-center rounded-lg p-4 mb-5 mt-5 transition-all" style="margin-top:20px;">更新成功</div>
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <textarea v-model="title" rows="5" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-300">送出</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'

const route = useRoute()
const store = useNoteStore()
const id = Number(route.params.id)
const note = store.notes.find(n => n.id === id)
const title = ref(note ? note.title : '')
const showSuccess = ref(false)

function onSubmit() {
  store.editNote(id, title.value)
  showSuccess.value = true
  setTimeout(() => {
    showSuccess.value = false
  }, 1000)
  router.push({ name: 'NoteGrid' })
}
</script>
