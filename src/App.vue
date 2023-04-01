<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div>Here is a greeting from pinia: {{ myStore.greetText }}</div>
</template>

<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import HelloWorld from './components/HelloWorld.vue'
    import { useMyStoreStore } from './stores/myStore'

    const myStore = useMyStoreStore()
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        color: #2c3e50;
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
