<template>
  <div class="todo-item">
    <span>{{ todo }}</span>
    <button @click="handleRemove">刪除</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  todo: String,
  index: Number
})
const emit = defineEmits(['remove'])

function handleRemove() {
  emit('remove', props.index)
}
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
button {
  margin-left: 10px;
}
</style>
