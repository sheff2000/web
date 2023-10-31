<script setup>
    import ButtonPage from './ButtonPage.vue';
    import { useShips } from '@/stores/shipStore';

    const shipsStore = useShips();
</script>
<template>
    <div class="input-group">
        <ButtonPage :name="'Prev'" />
        <span class="input-group-text" id="basic-addon1"> Page {{ shipsStore.nowPage }} </span>
        <ButtonPage :name="'Next'" />
    </div>
</template>