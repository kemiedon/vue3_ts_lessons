<script setup lang="ts">
import WeatherInfo from './components/WeatherInfo.vue'
import FeedbackForm from './components/FeedbackForm.vue'
import { ref } from 'vue'

const weather = {
  city: '台北',
  temperature: 33,
  description: '晴朗'
}
const feedbackMsg = ref('')
function handleFeedback(msg) {
  feedbackMsg.value = msg
}
</script>

<template>

  <WeatherInfo :city="weather.city" :temperature="weather.temperature" :description="weather.description" />
  <FeedbackForm @feedback="handleFeedback" />
  <div v-if="feedbackMsg" class="feedback">收到回饋：{{ feedbackMsg }}</div>
</template>

<style scoped>
.feedback{
    margin:20px 0; 
    color: #42b983; 
    font-weight:bold;
}
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
