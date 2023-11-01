<script setup>
    import { computed } from 'vue';
    import BlockPaggination from './paggination/BlockPaggination.vue';
    import BtnGoMain from './pilots/BtnGoMain.vue';
    import BlinkText from './BlinkText.vue';
    import { useHeader } from '@/stores/headerStore';
    
    const storeHeader = useHeader();

    let isBlockPagginationRoute = computed(() => storeHeader.nowPage === 'shipsList');
    let isBtnBackRoute = computed(() => storeHeader.nowPage === 'pilots');
    //let isBlink = computed(() => storeHeader.isLoadPage );

    
</script>
<template>
    <nav class="navbar fixed-top bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">{{ storeHeader.titlePage }}</span>
            <div>
                <BlockPaggination v-if="isBlockPagginationRoute" />
                <BtnGoMain v-if="isBtnBackRoute" />
            </div>
            <form class="d-flex" role="search">
                <BlinkText :blinkText = "storeHeader.blinkText" :stopFlag="storeHeader.isLoadPage"/>
            </form>
        </div>
    </nav>
</template>
<style scoped>
    nav {
        padding-left: 30px;
        padding-right: 30px;
    }
   
</style>