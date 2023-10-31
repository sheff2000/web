<script setup>
    import {usePilots} from '@/stores/pilotsStore';
    import { onMounted } from 'vue';
    import PilotCard from '@/components/pilots/PilotCard.vue';
    

    const storePilots = usePilots();
  

    onMounted(() => {
       storePilots.getPilotsInfo();
    });

</script>

<template>
    <div v-if="storePilots.error" class="alert alert-danger">{{ storePilots.textError }}</div>
    <div class="row ">
        <div class="col" v-for="pilot in storePilots.pilots_info" :key="pilot.info.url">
            <PilotCard :pilotData="pilot" />
        </div>
    </div>
</template>
