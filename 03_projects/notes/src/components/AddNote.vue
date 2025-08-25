<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useNoteStore } from '../stores/noteStore'
const route = useRoute()
const router = useRouter()
const store = useNoteStore()
const title = ref('')
const showSuccess = ref(false)
const showEmpty = ref(false)
function onSubmit() {
    if(title.value != ''){
        store.addNote(title.value)
        showSuccess.value = true
        title.value = ''
        setTimeout(() => {
            showSuccess.value = false
            router.push({ name: 'NoteGrid' })
        }, 1000)
    }else{
        showEmpty.value = true;
        setTimeout(() => {
            showEmpty.value = false
            router.push({ name: 'NoteGrid' })
        }, 1000)
    }
  
}
</script>
<template>
<div class="add-note">
    <h2>新增筆記</h2>
    <div v-if="showEmpty" class="empty-message">請輸入資料</div>
    <div v-if="showSuccess" class="success-message">新增成功</div>
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

.add-note {
  width: 90%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  margin: 20px;
}
.add-note h2{
    text-align: left;
}
.add-note input,
.add-note textarea {
  width: 99%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.add-note button {
  padding: 10px 20px;
  background-color: #2e9fcc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.add-note button:hover {
  background-color: #1f7ca0;
}
.success-message {
    color: #fff;
    background-color: #2ecc71;
    padding: 8px 12px;
    border-radius: 4px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
}
</style>
