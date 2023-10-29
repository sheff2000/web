<script setup>
    import { defineProps } from 'vue';
    import { useShips } from '@/stores/shipStore'

    const { name } = defineProps({
        name: {
            type: String,
            required: true
        }
    });

    let nameBTN = name === 'Prev' ? 'Prev Page' : (name === 'Next' ? 'Next Page' : '');

    const shipsStore = useShips();

    function clickBTN() {
        if (name === 'Prev') {
            shipsStore.prevPage(); 
        }
        if (name === 'Next') {
            shipsStore.nextPage(); 
        }
    }
</script>
<template>
    <button class="btn btn-primary" @click="clickBTN()">{{ nameBTN }}</button>
</template>