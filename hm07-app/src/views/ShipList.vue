<script setup>
    import { onMounted } from 'vue';
    import ShipCard from '@/components/shipGallary/ShipCard.vue';
    import { useShips } from '@/stores/shipStore'
    
    const ships = useShips();
    

    onMounted(() => {
        ships.getShips();
    });

    //console.log('Count ship - ', ships.countShip);
    //console.log('List ship - ', ships.ships);
</script>

<template>
    <div v-if="ships.error" class="alert alert-danger">{{ ships.textError }}</div>
    <div class="row ">
        <div class="col" v-for="starship in ships.currentPageShips" :key="starship.url">
            <ShipCard :shipItem="starship" />
        </div>
    </div>
</template>
