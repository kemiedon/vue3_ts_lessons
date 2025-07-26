<script setup lang="ts">
import NoteList from './components/NoteList.vue'
import ToolBar from './components/ToolBar.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <ToolBar/>
    <!-- Main Content -->
    <main class="flex-1 container mx-auto px-4 py-6 flex">
      <div class="w-1/4 pr-4">
        <NoteList />
      </div>
      <div class="w-3/4">
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
</style>
