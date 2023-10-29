<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
    <div class="container text-center">
        <Header />
        <RouterView />
    </div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
</template>

<style scoped>

</style>
