<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'
import { storeToRefs } from 'pinia'

const store = useNoteStore()
const { filteredNotes: notes } = storeToRefs(store)
const deleteId = ref<number | null>(null)
const showModal = ref(false)

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
    <div class="note-grid-container">
        <h2 class="note-title">所有筆記</h2>
        <div class="note-grid">
            <div v-for="note in notes" :key="note.id" class="note-card">
                <div class="note-card-header">
                    <a @click="store.markedPinned(note.id)">
                        <i 
                            class="fa-solid fa-thumbtack note-thumbtack" 
                            :class="{ rotate: note.pinned }"
                        ></i>
                    </a>
                    
                    <span class="note-card-title">{{ note.title }}</span>
                </div>
                <p class="note-card-content">{{ note.content }}</p>
                <div class="note-card-actions">
                    <RouterLink :to="{ name: 'EditNote', params: { id: note.id } }" class="note-edit">
                        <i class="fa-solid fa-edit"></i>
                    </RouterLink>
                    <a @click="handleDelete(note.id)" class="note-delete">
                        <i class="fa-solid fa-trash"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div id="modal" class="modal" :class="{ hidden: !showModal }">
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">是否刪除</h2>
                <button @click="showModal = false" class="modal-close-btn">
                    <svg class="modal-close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>
            </div>
            <p class="modal-message">確定刪除此筆記錄?</p>
            <div class="modal-actions">
                <button @click="showModal = false" class="modal-cancel-btn">
                    取消
                </button>
                <button @click="confirmDelete" class="modal-confirm-btn">
                    確定
                </button>
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

