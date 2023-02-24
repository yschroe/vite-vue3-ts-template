import { defineStore } from 'pinia'

export const useMyStoreStore = defineStore('myStore', {
    state: () => ({ greetText: 'Hello, I am a store! :)', count: 0 }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++
        }
    }
})
