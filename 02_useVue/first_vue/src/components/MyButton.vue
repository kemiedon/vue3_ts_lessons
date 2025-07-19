<template>
  <button @click="$emit('click')">自訂按鈕</button>
</template>

<script lang="ts">
export default {
  name: 'MyButton',
};
</script>

<style scoped>
button {
  padding: 8px 16px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
