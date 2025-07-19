<template>
    <div>
        <h2>Events 組件</h2>
        <p style="color: #42b983; font-weight: bold;">Vue 3 常用事件監聽範例與說明</p>
        <div class="custom-grid">
            <div class="custom-card">
                <div class="custom-title">1. click 事件</div>
                <p>用於監聽按鈕、區塊等元素的點擊行為，常用於觸發互動、提交、切換等：</p>
                <button @click="onClick" class="custom-btn">點我顯示訊息</button>
                <span v-if="clickMsg" class="event-msg">{{ clickMsg }}</span>
            </div>
            <div class="custom-card">
                <div class="custom-title">2. dblclick 事件</div>
                <p>用於監聽元素的雙擊行為，常見於編輯、放大、特殊操作：</p>
                <div @dblclick="onDblClick" class="event-dbl">請雙擊這個區塊</div>
                <span v-if="dblClickMsg" class="event-msg">{{ dblClickMsg }}</span>
            </div>
            <div class="custom-card">
                <div class="custom-title">3. change 事件</div>
                <p>用於監聽 input、select 等表單元素的值變化，常用於表單驗證、即時更新：</p>
                <select @change="onChange" v-model="selected" class="event-select">
                    <option value="">請選擇水果</option>
                    <option value="apple">蘋果</option>
                    <option value="banana">香蕉</option>
                    <option value="mango">芒果</option>
                </select>
                <span v-if="changeMsg" class="event-msg">{{ changeMsg }}</span>
            </div>
            <div class="custom-card" style="grid-column: span 3;">
                <div class="custom-title">4. 事件修飾符與應用</div>
                <p>下方按鈕可透過不同事件修飾符改變下方 box 區塊的背景色：</p>
                <div>
                    <!-- stop: 阻止事件冒泡，僅在此區塊處理 -->
                    <div @click.stop="changeColor('red')" class="custom-btn" style="display:inline-block; margin-right:8px;">
                        點擊此區塊 (stop)
                        <button @click="changeColor('red')" style="margin-left:8px;">區塊內按鈕</button>
                    </div>
                    <!-- prevent: 阻止表單送出預設行為 -->
                    <form @submit.prevent="changeColor('green')" style="display:inline-block;">
                        <button type="submit" class="custom-btn">送出表單 (prevent)</button>
                    </form>
                    <button @click.capture="changeColor('blue')" class="custom-btn">Blue (capture)</button>
                    <button @click.self="changeColor('yellow')" class="custom-btn">Yellow (self)</button>
                    <button @click.once="changeColor('purple')" class="custom-btn">Purple只能變一次 (once)</button>
                    <button @click.middle="changeColor('orange')" class="custom-btn">中鍵Orange (middle)</button>
                    <button @wheel.passive="changeColor('pink')" class="custom-btn">滾輪Pink (passive)</button>
                </div>
                <div class="box" :style="{ background: boxColor }">
                    這個 box 會根據上方事件改變背景色，目前：{{ boxColor }}
                </div>
                <ul class="event-list">
                    <li><b>stop</b>：阻止事件冒泡，僅在此元素處理事件。</li>
                    <li><b>prevent</b>：阻止瀏覽器預設行為（如表單送出、連結跳轉）。</li>
                    <li><b>capture</b>：在捕獲階段觸發事件（先於冒泡）。</li>
                    <li><b>self</b>：僅在事件目標為自身時觸發。</li>
                    <li><b>once</b>：事件只會觸發一次。</li>
                    <li><b>middle</b>：滑鼠中鍵點擊時觸發。</li>
                    <li><b>passive</b>：告訴瀏覽器事件處理不會阻止預設行為，提升效能。</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// click 事件
const clickMsg = ref('');
function onClick() {
  clickMsg.value = '你點擊了按鈕！';
}

// dblclick 事件
const dblClickMsg = ref('');
function onDblClick() {
  dblClickMsg.value = '你雙擊了區塊！';
}

// change 事件
const selected = ref('');
const changeMsg = ref('');
function onChange() {
  changeMsg.value = selected.value ? `你選擇了：${selected.value}` : '';
}

// box 顏色事件
const boxColor = ref('#f5f5f5');
function changeColor(color) {
  boxColor.value = color;
}
</script>

<style scoped>
.custom-grid {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(3,1fr);
  gap: 10px;
  margin-bottom: 20px;
}
.custom-card {
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: 20px;
  margin-bottom: 16px;
}
.custom-title {
  color: #2c3e50;
  font-size: 1.1rem;
  margin-bottom: 8px;
}
.custom-input {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
}
.custom-img {
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
  margin-bottom: 8px;
}
.custom-btn {
  padding: 6px 16px;
  border: none;
  border-radius: 4px;
  background: #42b983;
  color: #fff;
  cursor: pointer;
  margin-right: 8px;
  margin-bottom: 8px;
  transition: background 0.2s;
}
.custom-btn:hover {
  background: #369870;
}
.text-white{
    color: white;
}
.event-msg {
  color: #e67e22;
  font-weight: bold;
  margin-left: 10px;
}
.event-dbl {
  display: inline-block;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  background: #fffbe6;
  margin-bottom: 8px;
}
.event-select {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
}
.box {
  width: 100%;
  max-width: 400px;
  height: 60px;
  border: 1px solid #aaa;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: background 0.3s;
  border-radius: 8px;
}
.event-list {
  padding-left: 20px;
  margin-top: 10px;
}
.event-list li {
  margin-bottom: 4px;
  text-align: left;
}
</style>
