<template>
  <div class="weather-card">
    <h2>天氣資訊</h2>
    <p>城市：{{ city }}</p>
    <p>溫度：{{ temperature }}°C</p>
    <p>天氣：{{ description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  city: String,
  temperature: Number,
  description: String
})
</script>

<style scoped>
.weather-card {
  background: #e3f2fd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: 16px;
}
</style>
