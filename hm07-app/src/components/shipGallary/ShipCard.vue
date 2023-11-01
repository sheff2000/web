<script setup>
    import { useRouter } from 'vue-router';
    import {usePilots} from '@/stores/pilotsStore';
    import { useHeader } from '@/stores/headerStore';

    const pilots = usePilots();
    const router = useRouter();
    const storeHeader = useHeader();
    
    const { shipItem } = defineProps({
        shipItem: Object,
        default: {}
    });

    const isDisabled = !(shipItem.pilots.length > 0);

    const gotoRouterPilots = () => {
        pilots.setPilots_url(shipItem.pilots);
        pilots.shipName = shipItem.name;
        pilots.shipModel = shipItem.model;

        storeHeader.nowPage = 'pilots';
        storeHeader.titlePage = `Pilots from ${shipItem.name}`;

        router.push('/pilots');
    }

</script>

<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{ shipItem.model }}</h5>
            <p class="card-text">
                <b>Name: </b> {{ shipItem.name }}<br>
                <b>Model: </b> {{ shipItem.model }}<br>
                <b>Manufacturer: </b> {{ shipItem.manufacturer }}<br>
            </p>
        </div>
       
        <div class="card-body">
            <button class="btn btn-light" 
                :class="{ 'btn-outline-light': isDisabled, 'btn-light': !isDisabled }"
                :disabled="isDisabled" 
                @click="gotoRouterPilots">
                    Watch pilots
            </button>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">cost in credits: {{ shipItem.cost_in_credits  }}</li>
            <li class="list-group-item">starship class: {{ shipItem.starship_class  }}</li>
        </ul>
    </div>
</template>
<style scoped>
    .card {
        height: 350px;
        overflow: hidden;
        background-color: #6c757d;
        margin-top: 15px;
        color: #f8f9fa;
    }
    .card-title {
        color: #0dcaf0;
    }
</style>