<template>
  <div>
    <h2>WatchEffect 組件</h2>
    <p style="color: #42b983; font-weight: bold;">watchEffect 會自動追蹤響應式資料，資料一變就執行副作用。</p>
    <input v-model="inputValue" placeholder="請輸入內容" style="padding:6px 12px; margin-bottom:8px;" />
    <p>目前輸入：{{ inputValue }}</p>
    <p style="color:#e67e22; font-weight:bold;">watchEffect 記錄：{{ effectMsg }}</p>
    <p style="color:#888; font-size:0.95em; margin-top:10px;">每次 inputValue 改變時，watchEffect 都會自動執行，不需指定監聽目標。</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';

const inputValue = ref('');

const effectMsg = ref('尚未輸入');

watchEffect(() => {
  effectMsg.value = `你剛剛輸入了：${inputValue.value}`;

});
</script>

<style scoped>
input {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
}
</style>
