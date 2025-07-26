<script setup lang="ts">
import { ref } from 'vue'
import { useNoteStore } from '../stores/noteStore'

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
        }, 1000)
    }else{
        showEmpty.value = true;
        setTimeout(() => {
            showEmpty.value = false
        }, 1000)
    }
  
}
</script>
<template>
  <div class="container mx-auto max-w-full p-6">
    <h2 class="text-2xl font-bold mb-4 text-left">新增筆記</h2>
    <div v-if="showEmpty" class="bg-gray-600 text-white text-center rounded-lg p-4 mb-5 mt-5 transition-all" style="margin-top:20px;">請輸入資料</div>
    <div v-if="showSuccess" class="bg-green-600 text-white text-center rounded-lg p-4 mb-5 mt-5 transition-all" style="margin-top:20px;">更新成功</div>
    <form @submit.prevent="onSubmit" class="space-y-4">

      <div>
        <textarea v-model="title" rows="5" class="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">送出</button>
      </div>
    </form>
  </div>
</template>


