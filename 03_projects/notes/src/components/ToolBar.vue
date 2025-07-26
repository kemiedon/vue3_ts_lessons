
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useNoteStore } from '../stores/noteStore'
import { useRouter } from 'vue-router'

const store = useNoteStore()
const router = useRouter()
const keyword = ref('')

function onSubmit() {
  store.setSearchText(keyword.value)
  if (store.searchResults.length > 0) {
    router.push({ name: 'SearchNote' })
  }
}
const clearPlaceholder = () =>{
    document.querySelector('#keyword').placeholder = ''
}

</script>
<template>
  <nav class="flex items-center justify-between bg-cyan-500 px-6 py-3 text-white">
    <RouterLink to="/" class="navbar-brand text-xl font-bold">My Notes</RouterLink>
      <form action="" @submit.prevent="onSubmit">
        <div class="flex-1 flex justify-center">
            <input id="keyword" v-model="keyword" type="text" placeholder="搜尋..." class="form-control bg-white rounded-l-lg px-3 py-2 w-64 text-black" />
            <button type="submit" class="btn outline-none rounded-r-lg hover:bg-black
"><i class="fa-solid fa-magnifying-glass bg-black rounded-r-lg p-4 w-full"></i></button>
        </div>
        
      </form>
      <RouterLink :to="{ name: 'AddNote'}">
        <button class="bg-black  hover:bg-gray-600 text-white px-4 py-2 rounded-lg">新增筆記</button>
      </RouterLink>
    </nav>

</template>

