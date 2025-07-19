<script setup lang="ts">
import { ref } from 'vue'



const count = ref(0)
</script>

<template>
    <button @click="$router.push('/')">LifeCircle</button>
    <button @click="$router.push('/my_button')">MyButton</button>
    <button @click="$router.push('/data_binding')">DataBinding</button>
    <button @click="$router.push('/events')">Events</button>
    <button @click="$router.push('/computed')">Computed</button>
    <button @click="$router.push('/watch')">Watch</button>
    <button @click="$router.push('/watch_effect')">WatchEffect</button>
    
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
