import { defineStore } from 'pinia'

// 基本的 Pinia 狀態管理範例
export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    username: ''
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
    welcome: (state) => `Hello, ${state.username || 'Guest'}!`
  },
  actions: {
    increment() {
      this.count++
    },
    setUsername(name: string) {
      this.username = name
    }
  }
})
