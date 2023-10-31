<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Header from './components/Header.vue';
import ShipList from './views/ShipList.vue';
import ProgressBar from './components/ProgressBar.vue';
</script>

<template>
    <div class="container">
        <Header />
    </div>
        
    <div class="container text-center" id="body">
       <!-- <ProgressBar />
        <ShipList /> -->
        <RouterView />
    </div>
</template>

<style scoped>
    div#body {
        margin-top: 70px;
    }
</style>
