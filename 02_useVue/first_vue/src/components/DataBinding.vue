<template>
  <div>
    <h2>DataBinding 組件</h2>
    <p style="color: #42b983; font-weight: bold;">Vue 3 資料繫結與常用指令範例</p>

    <div class="custom-grid">
        <!-- 插值語法 -->
        <section class="custom-card">
            <h3 class="custom-title">0. 插值語法 ({{ }})</h3>
            <p>使用 <code>{{ }}</code> 在模板中顯示資料：</p>
            <p>目前時間：{{ now }}</p>
            <p>訊息：{{ msg }}</p>
        </section>

        <!-- 資料繫結 v-model -->
        <section class="custom-card">
            <h3 class="custom-title">1. 資料繫結 (v-model)</h3>
            <p>使用 <code>v-model</code> 雙向綁定 input 元素：</p>
            <input v-model="inputText" placeholder="請輸入文字" class="custom-input" />
            <p>你輸入的內容：{{ inputText }}</p>
        </section>

        <!-- 屬性繫結 v-bind -->
        <section class="custom-card">
            <h3 class="custom-title">2. 屬性繫結 (v-bind)</h3>
            <p>用 <code>v-bind</code> 綁定 HTML 屬性：</p>
            <img :src="imgUrl" :alt="imgAlt" width="80" class="custom-img" />
            <p>圖片來源：{{ imgUrl }}</p>
        </section>

        <!-- 樣式繫結 :class, :style -->
        <section class="custom-card">
            <h3 class="custom-title">3. 樣式繫結 (:class, :style)</h3>
            <p>根據資料動態切換 class 與 style：</p>
            <button :class="{ active: isActive }" :style="{ color: isActive ? 'red' : 'black' }" @click="isActive = !isActive"
                class="custom-btn">
                切換狀態 (目前：{{ isActive ? '啟用' : '未啟用' }})
            </button>
        </section>

        <!-- v-if 條件渲染 -->
        <section class="custom-card">
            <h3 class="custom-title">4. 條件渲染 (v-if)</h3>
            <p>根據條件顯示內容：</p>
            <button @click="showMsg = !showMsg" class="custom-btn">切換顯示</button>
            <p v-if="showMsg" class="custom-msg">這段文字只有在 showMsg 為 true 時才會顯示。</p>
        </section>

        <!-- v-for 列表渲染 -->
        <section class="custom-card">
            <h3 class="custom-title">5. 列表渲染 (v-for)</h3>
            <p>用 <code>v-for</code> 迭代陣列：</p>
            <ul>
                <li class="item" v-for="(item, idx) in items" :key="idx">{{ idx + 1 }}. {{ item }}</li>
            </ul>
        </section>

        <!-- v-on 事件監聽 -->
        <section class="custom-card">
            <h3 class="custom-title">6. 事件監聽 (v-on)</h3>
            <p>用 <code>v-on</code> (或 @) 綁定事件：</p>
            <button @click="count++" class="custom-btn">按讚</button>
            <span>{{ count }}</span>
        </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const now = `${new Date().getFullYear().toString().slice(2)}-${(new Date().getMonth()+1).toString().padStart(2,'0')}-${new Date().getDate().toString().padStart(2,'0')}`;
const msg = ref('');
msg.value = "Happy的vue課程";
// 1. 資料繫結
const inputText = ref('');

// 2. 屬性繫結
import vueLogo from '../assets/trophy.png';
const imgUrl = ref(vueLogo);
const imgAlt = ref('獎盃');

// 3. 樣式繫結
const isActive = ref(false);

// 4. v-if 條件渲染
const showMsg = ref(true);

// 5. v-for 列表渲染
const items = ref(['蘋果', '香蕉', '芒果']);

// 6. v-on 事件監聽
const count = ref(0);
</script>

<style scoped>
.custom-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(4,1fr);
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
.custom-msg {
  color: #e67e22;
  font-weight: bold;
}
.active {
  font-weight: bold;
  background: #e0ffe0;
}
ul {
  padding-left: 20px;
}
.item {
  margin-bottom: 4px;
    text-align: left;
}
</style>
