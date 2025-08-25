import { defineStore } from 'pinia'
import { ref } from 'vue'
export interface Note {
  id: number
  title: string
  pinned: boolean
}

export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: [
      { id: 1, title: '第一則筆記', pinned: false },
      { id: 2, title: '第二則筆記', pinned: false  },
      { id: 3, title: '第三則筆記', pinned: true  }
    ] as Note[],
    searchText: '',
    searchResults: [] as Note[],
  }),
  getters: {
    pinnedNotes(state){
        return state.notes.filter(note => note.pinned)
    },
    unpinnedNotes(state){
        return state.notes.filter(note => !note.pinned)
    },
    filteredNotes(state) {
      if (!state.searchText) return state.notes
      return state.notes.filter(note => note.title.includes(state.searchText))
    }
  },
  actions: {
    markedPinned(id: number) {
        const index = this.notes.findIndex(note => note.id === id)
        if(index !== -1){
            this.notes[index].pinned = !this.notes[index].pinned
        }
    },
    addNote(title: string) {
      const newId = this.notes.length ? Math.max(...this.notes.map(n => n.id)) + 1 : 1
      this.notes.push({ id: newId, title, pinned: false })
    },
    editNote(id: number, newTitle: string) {
      const note = this.notes.find(n => n.id === id)
      if (note) note.title = newTitle
    },
    deleteNote(id: number) {
      this.notes = this.notes.filter(note => note.id !== id)
    },
    setSearchText(text: string) {
      this.searchText = text
      this.searchResults = this.filteredNotes // 更新 searchResults
    },
  }
})
