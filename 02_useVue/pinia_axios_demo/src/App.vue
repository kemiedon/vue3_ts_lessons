

<script setup lang="ts">
import NoteList from './components/NoteList.vue'
</script>


<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <nav class="flex items-center justify-between bg-blue-600 px-6 py-3 text-white">
      <a class="navbar-brand text-xl font-bold" href="#">My Notes</a>
      <div class="flex-1 flex justify-center">
        <input type="text" placeholder="搜尋..." class="form-control rounded px-3 py-2 w-64 text-black" />
      </div>
      <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Add Note</button>
    </nav>

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
      © 2024 My Notes
    </footer>
  </div>
</template>

<style scoped>

</style>
