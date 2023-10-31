<script setup>
    import { computed, ref } from 'vue';
    import BlockPaggination from './paggination/BlockPaggination.vue';
    import BtnGoMain from './pilots/BtnGoMain.vue';
    import { useHeader } from '@/stores/headerStore';
    
    const storeHeader = useHeader();

    let isBlockPagginationRoute = computed(() => storeHeader.nowPage === 'shipsList');
    let isBtnBackRoute = computed(() => storeHeader.nowPage === 'pilots');
</script>
<template>
    <nav class="navbar fixed-top bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Name Page</span>
            <div>
                <BlockPaggination v-if="isBlockPagginationRoute" />
                <BtnGoMain v-if="isBtnBackRoute" />
            </div>
            <form class="d-flex" role="search">
                <span class="blink">{{storeHeader.nowPage}} status</span>
            </form>
        </div>
    </nav>
</template>
<style scoped>
    nav {
        padding-left: 30px;
        padding-right: 30px;
    }
    .blink {
        animation: blinker 0.6s linear infinite;
        color: greenyellow;
       }
      @keyframes blinker {  
        50% { opacity: 0; }
       }
       .blink-one {
         animation: blinker-one 1s linear infinite;
       }
       @keyframes blinker-one {  
         0% { opacity: 0; }
       }
       .blink-two {
         animation: blinker-two 1.4s linear infinite;
       }
       @keyframes blinker-two {  
         100% { opacity: 0; }
       }
</style>