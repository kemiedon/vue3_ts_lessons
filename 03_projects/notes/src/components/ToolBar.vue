
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
    <nav class="toolbar">
        <RouterLink to="/" class="navbar-brand">My Notes</RouterLink>
        <form action="" @submit.prevent="onSubmit" class="toolbar-form">
            <div class="toolbar-search">
                <input
                    id="keyword"
                    v-model="keyword"
                    type="text"
                    placeholder="搜尋..."
                    class="toolbar-input"
                />
                <button type="submit" class="toolbar-search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
        <RouterLink :to="{ name: 'AddNote'}">
            <button class="toolbar-add-btn">新增筆記</button>
        </RouterLink>
    </nav>
</template>

<style scoped>
.toolbar {
    background-color: #ffffff;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar-brand {
    font-size: 1.5rem;
    font-weight: bold;
    color: #3498db;
    text-decoration: none;
}
.toolbar-form {
    flex: 1;
    display: flex;
    justify-content: center;
}
.toolbar-search {
    display: flex;
    align-items: center;
}
.toolbar-input {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    width: 220px;
    font-size: 1rem;
    outline: none;
}
.toolbar-search-btn {
    padding: 8px 16px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
}
.toolbar-search-btn:hover {
    background-color: #2980b9;
}
.toolbar-add-btn {
    padding: 8px 16px;
    background-color: #000;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    margin-left: 16px;
    transition: background 0.2s;
}
.toolbar-add-btn:hover {
    background-color: #444;
}
</style>
