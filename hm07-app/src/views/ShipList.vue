<script setup>
    import { onMounted } from 'vue';
    import ShipCard from '@/components/shipGallary/ShipCard.vue';
    import { useShips } from '@/stores/shipStore'
    
    const ships = useShips();
    
</script>

<template>
    <div v-if="ships.error" class="alert alert-danger">{{ ships.textError }}</div>
    <div v-else class="row ">
        <div class="alert alert-warning" v-if="!ships.currentPageShips">
            await ....
        </div>
        <div class="col" v-else v-for="starship in ships.currentPageShips">
            <ShipCard :shipItem="starship" />
        </div>
    </div>
</template>
