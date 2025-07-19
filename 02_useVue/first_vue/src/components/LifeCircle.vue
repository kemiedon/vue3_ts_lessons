<template>
    <div>
        <h2>Vue 3 生命週期範例</h2>
        <p>請查看 console 以觀察生命週期執行順序。</p>
        <button @click="toggleShow">切換顯示</button>
        <div v-if="show">
            <p>元件正在顯示中</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';

const show = ref(true);

function toggleShow() {
    show.value = !show.value;
}

onBeforeMount(() => {
    console.log('onBeforeMount: 元件即將掛載');
});

onMounted(() => {
    console.log('onMounted: 元件已掛載');
});

onBeforeUpdate(() => {
    console.log('onBeforeUpdate: 元件即將更新');
});

onUpdated(() => {
    console.log('onUpdated: 元件已更新');
});

onBeforeUnmount(() => {
    console.log('onBeforeUnmount: 元件即將卸載');
});

onUnmounted(() => {
    console.log('onUnmounted: 元件已卸載');
});
</script>

<style scoped>
h2 {
    color: #42b983;
}
</style>