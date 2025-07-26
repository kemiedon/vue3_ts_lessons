import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    todos: [] as string[],
    newTodo: ''
  }),
  getters: {
    total: (state) => state.todos.length
  },
  actions: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push(this.newTodo)
        this.newTodo = ''
      }
    },
    removeTodo(index: number) {
      this.todos.splice(index, 1)
    }
  }
})
