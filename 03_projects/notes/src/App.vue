<script setup lang="ts">
import NoteList from './components/NoteList.vue'
import ToolBar from './components/ToolBar.vue'
</script>

<template>
  <div class="container">
    <!-- Navbar -->
    <ToolBar/>
    <!-- Main Content -->
    <main class="flex-container">
      <div class="w-30">
        <NoteList />
      </div>
      <div class="w-70">
        <router-view />
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 text-center py-3 mt-auto w-full">
      © 2025 My Notes
    </footer>
  </div>
</template>

<style scoped>
.flex-container {
    width: 80%;
    margin: auto;
    display: flex;
    min-height: 100vh;
    font-family: Arial, sans-serif;
}
.w-30{
    width: 20%;
}
.w-70{
    width: 80%;
}
</style>
