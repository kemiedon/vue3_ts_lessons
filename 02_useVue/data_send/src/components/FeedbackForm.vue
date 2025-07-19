<template>
  <div class="feedback-card">
    <h2>意見回饋</h2>
    <input v-model="input" placeholder="請輸入您的意見..." class="feedback-input" />
    <button @click="sendFeedback" class="feedback-btn">送出</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineEmits } from 'vue'

const input = ref('')
const emit = defineEmits(['feedback'])

function sendFeedback() {
  if (input.value.trim()) {
    emit('feedback', input.value)
    input.value = ''
  }
}
</script>

<style scoped>
.feedback-card {
  background: #fffbe6;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: 16px;
}
.feedback-input {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 80%;
  margin-bottom: 8px;
}
.feedback-btn {
  padding: 6px 16px;
  border: none;
  border-radius: 4px;
  background: #42b983;
  color: #fff;
  cursor: pointer;
}
.feedback-btn:hover {
  background: #369870;
}
</style>
