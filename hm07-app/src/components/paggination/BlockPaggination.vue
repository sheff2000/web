<script setup>
    import ButtonPage from './ButtonPage.vue';
    import { useShips } from '@/stores/shipStore';

    const shipsStore = useShips();

    function clickBTN(name) {
        if (name === 'Prev') {
            console.log('Click to PREV BTN');
            shipsStore.prevPage(); 
        }
        if (name === 'Next') {
            console.log('Click to NEXT BTN');
            shipsStore.nextPage(); 
        }
    }

</script>
<template>
    <div class="input-group">
        <ButtonPage @clickBTN="clickBTN" :name="'Prev'" :isDisabled="shipsStore.isDisabledPrevBTN"  :text="'Prev Page'"/>
        <span class="input-group-text" id="basic-addon1"> Page {{ shipsStore.nowPage }} </span>
        <ButtonPage @clickBTN="clickBTN" :name="'Next'" :isDisabled="shipsStore.isDisabledNextBTN" :text="'Next Page'"/>
    </div>
</template>