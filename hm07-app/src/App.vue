<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import { useShips } from '@/stores/shipStore'
const ships = useShips();
ships.getShips();
</script>

<template>
    <div class="container">
        <Header />
    </div>
        
    <div class="container text-center" id="body">
        <RouterView />
    </div>
</template>

<style scoped>
    div#body {
        margin-top: 70px;
    }
</style>
