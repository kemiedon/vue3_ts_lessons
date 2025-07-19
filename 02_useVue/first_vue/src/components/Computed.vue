<template>
  <div>
    <h2>Computed 組件</h2>
    <p style="color: #42b983; font-weight: bold;">computed 是 Vue 3 中用來根據響應式資料自動計算並快取結果的屬性，當依賴的資料改變時才會重新計算，適合用於複雜的資料處理。</p>
    <p>原始訊息：{{ message }}</p>
    <p>反轉後：{{ reversedMessage }}</p>
    <input v-model="message" placeholder="請輸入訊息" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const message = ref('Hello Vue 3!');
const reversedMessage = computed(() => message.value.split('').reverse().join(''));
</script>

<style scoped>
/* 可自訂樣式 */
</style>

