<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'
import { storeToRefs } from 'pinia'

const store = useNoteStore()
const { notes } = storeToRefs(store)
const router = useRouter()
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
    <div class="sidebar">
        <h2>重要</h2>
        <ul class="note-list">
            <li v-for="note in store.pinnedNotes" :key="note.id" class="note-list-item">
                <i class="fa-solid fa-thumbtack note-icon rotate"></i>
                <RouterLink :to="{ name: 'EditNote', params: { id: note.id } }" class="note-link">
                    <span class="note-title">{{ note.title }}</span>
                </RouterLink>      
                <a @click="handleDelete(note.id)" class="note-delete-btn">
                    <i class="fa-solid fa-trash"></i>
                </a>
            </li>
        </ul>
        <hr>
        <ul class="note-list">
            <li v-for="note in store.unpinnedNotes" :key="note.id" class="note-list-item">
                <i class="fa-solid fa-thumbtack note-icon"></i>
                <RouterLink :to="{ name: 'EditNote', params: { id: note.id } }" class="note-link">
                    <span class="note-title">{{ note.title }}</span>
                </RouterLink>      
                <a @click="handleDelete(note.id)" class="note-delete-btn">
                    <i class="fa-solid fa-trash"></i>
                </a>
            </li>
        </ul>
    </div>
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
.sidebar {
  width: 250px;
  color: rgb(36, 36, 36);
  padding: 20px;
}
.sidebar h2 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}
.sidebar li:hover {
  background-color: #fcf9dc;
}
.note-icon{
    color: black;
}
.rotate{
    transform: rotate(45deg);
}

</style>
