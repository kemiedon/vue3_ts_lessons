<template>
  <div>
    <h2>Watch 組件</h2>
    <p style="color: #42b983; font-weight: bold;">watch 可用來監聽響應式資料的變化，並執行對應動作。</p>
    <input v-model="inputValue" placeholder="請輸入內容" style="padding:6px 12px; margin-bottom:8px;" />
    <p>目前輸入：{{ inputValue }}</p>
    <ul>
      <li v-for="(msg, idx) in logs" :key="idx">{{ msg }}</li>
    </ul>
    <p style="color:#888; font-size:0.95em; margin-top:10px;">每次 inputValue 改變時，watch 都會記錄新舊值。</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const inputValue = ref('');
const logs = ref([]);

watch(inputValue, (newVal, oldVal) => {
  logs.value.push(`inputValue 從「${oldVal}」變成「${newVal}」`);
});
</script>

<style scoped>
ul {
  padding-left: 20px;
  margin-top: 8px;
}
li {
  margin-bottom: 4px;
  color: #2c3e50;
}
</style>
