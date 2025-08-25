

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { RouterLink, useRouter } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'

const store = useNoteStore()
const { searchResults } = storeToRefs(store)
const deleteId = ref<number | null>(null)
const showModal = ref(false)
const router = useRouter()

function handleDelete(id) {
    deleteId.value = id
    showModal.value = true
}
function confirmDelete() {
    if (deleteId.value !== null) {
        store.deleteNote(deleteId.value)
        deleteId.value = null
        showModal.value = false
        router.push({ name: 'NoteGrid' })
    }
}
</script>
<template>
    <div>
        <h2>搜尋結果</h2>
        <div v-if="searchResults.length === 0" class="text-gray-500">查無結果</div>
        <div v-else class="note-grid">
            <div v-for="note in searchResults" :key="note.id" class="note-card">
                <div class="note-card-header">
                    <h3>{{ note.title }}</h3>
                </div>
                <div class="note-card-actions">
                    <RouterLink :to="{ name: 'EditNote', params: { id: note.id } }">
                        <i class="fa-solid fa-edit"></i>
                    </RouterLink>
                    <a @click="handleDelete(note.id)">
                        <i class="fa-solid fa-trash"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.note-grid {
  flex-grow: 1;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
.note-card-header{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.note-card-header i{
    margin-bottom: 10px;
}
a{
    cursor: pointer;
}
.note-card {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.note-card h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}
.note-card p {
  color: #555;
}
.note-card-actions{
    width: 100%;
    display: flex;
    justify-content: flex-end;    
}
.note-card-actions i{
    margin-right: 10px;
}
.rotate{
    transform: rotate(45deg);
}
</style>