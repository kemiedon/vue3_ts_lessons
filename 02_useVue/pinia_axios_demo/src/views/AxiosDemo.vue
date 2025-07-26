<template>
  <div style="max-width:500px;margin:auto;text-align:center;">
    <h2>Axios 載入資料範例</h2>
    <button @click="fetchPosts" style="margin-bottom:12px;">載入文章</button>
    <ul v-if="posts.length" style="list-style:none;padding:0;">
      <li v-for="post in posts" :key="post.id" style="margin-bottom:8px;text-align:left;">
        <b>{{ post.title }}</b>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <p v-else style="color:#888;">尚未載入資料</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const posts = ref([])
async function fetchPosts() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
  posts.value = res.data
}
</script>
