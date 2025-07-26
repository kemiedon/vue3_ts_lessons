<template>
  <div>
    <h2>Pinia 待辦事項範例</h2>
    <input v-model="mainStore.newTodo" placeholder="請輸入待辦事項" style="width:70%;margin-bottom:8px;" @keyup.enter="mainStore.addTodo" />
    <button @click="mainStore.addTodo" style="margin-left:8px;">新增</button>
    <ul style="list-style:none;padding:0;margin-top:16px;">
      <li v-for="(todo, idx) in mainStore.todos" :key="idx" style="margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;">
        <span>{{ todo }}</span>
        <button @click="mainStore.removeTodo(idx)" style="margin-left:8px;">刪除</button>
      </li>
    </ul>
    <p v-if="mainStore.total > 0" style="margin-top:12px;">共 {{ mainStore.total }} 項</p>
    <p v-else style="margin-top:12px;color:#888;">目前沒有待辦事項</p>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/mainStore'
const mainStore = useMainStore()
</script>
