<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="新增記事" />
    <ul class="list" v-if="todos.length > 0">
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }} <button @click="removeTodo(index)">刪除</button>
      </li>
    </ul>
    <p>共 {{ todos.length }} 項</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('記事本')
const newTodo = ref('')
const todos = ref([])

const addTodo = () => {
  if (newTodo.value.trim()) {
    todos.value.push(newTodo.value)
    newTodo.value = ''
  }
}
const removeTodo = (index) => {
  todos.value.splice(index, 1)
}
</script>

<style>
.container { 
    width: 500px; 
    margin: auto;
    padding: 20px; 
    text-align: center; 
}
ul { 
    list-style: none; 
    padding: 10px; 
    background-color: rgb(204, 197, 151);
}
li { 
    margin: 10px 0; 
    display: flex;
    justify-content: space-between;
    align-items: center;
}
button { 
    margin-left: 10px; 
}
input{
    height: 40px;
    padding: 5px;
    font-size: 16px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>