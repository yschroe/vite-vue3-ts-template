import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useMyStoreStore = defineStore('myStore', () => {
    const greetText = ref('Hello from Pinia! 👋')
    const count = ref(0)

    const doubleCount = computed(() => count.value * 2)

    function increment() {
        count.value += 1
    }

    return { greetText, count, doubleCount, increment }
})
