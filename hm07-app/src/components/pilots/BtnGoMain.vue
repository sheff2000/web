<script setup>
    import { useRouter } from 'vue-router';
    import { useHeader } from '@/stores/headerStore';

    const router = useRouter();
    const storeHeader = useHeader();

    const backToShipList = () => {

        storeHeader.nowPage = 'pilots';
        storeHeader.titlePage = `Star Ships List`;
        storeHeader.nowPage = 'shipsList';

        router.push('/');
    }
</script>
<template>
    <button type="button" class="btn btn-outline-light" @click="backToShipList"> Back to Ships List</button>
</template>