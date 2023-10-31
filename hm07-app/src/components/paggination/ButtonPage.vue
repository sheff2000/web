<script setup>
    import {computed, defineProps } from 'vue';
    import { useShips } from '@/stores/shipStore'

    const { name } = defineProps({
        name: {
            type: String,
            required: true
        }
    });

    let nameBTN = name === 'Prev' ? 'Prev Page' : (name === 'Next' ? 'Next Page' : '');
   

    const shipsStore = useShips();

    // disabled/enabled btn
    const isDisabled = computed(() => {
        if (name === 'Prev') {
            return shipsStore.prevBtn;
        }
        if (name === 'Next') {
            return shipsStore.nextBtn;
        }
        return false;
    });

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
    <button class="btn btn-outline-light" 
        :disabled="!isDisabled"  
        @click="clickBTN()">

            {{ nameBTN }}

    </button>
</template>