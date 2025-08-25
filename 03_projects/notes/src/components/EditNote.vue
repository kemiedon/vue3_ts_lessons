<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'

const route = useRoute()
const router = useRouter()
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
    router.push({ name: 'NoteGrid' })
  }, 1000)
}
</script>
<template>
    <div class="edit-note">
        <h2>編輯筆記</h2>
        <div v-if="showSuccess" class="success-message">更新成功</div>
        <form @submit.prevent="onSubmit">
            <div>
                <textarea v-model="title" rows="5"></textarea>
            </div>
            <div style="text-align: right;">
                <button type="submit">送出</button>
            </div>
        </form>
    </div>
</template>
<style scoped>
.success-message {
    background-color: #27ae60;
    color: white;
    text-align: center;
    border-radius: 8px;
    padding: 16px;
    margin: 20px 0;
    transition: all 0.3s;
}
</style>
<style scoped>
.edit-note {
  width: 90%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin: 20px;
}
.edit-note input,
.edit-note textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.edit-note button {
  padding: 10px 20px;
  background-color: #2ecc71;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.edit-note button:hover {
  background-color: #27ae60;
}
</style>

