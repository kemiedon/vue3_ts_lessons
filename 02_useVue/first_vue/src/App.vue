<script setup lang="ts">
import { useRouter } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div style="margin: 20px 0;">
    <HelloWorld></HelloWorld>
  </div>
  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

