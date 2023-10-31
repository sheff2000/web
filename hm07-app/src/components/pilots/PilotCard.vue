<script setup>
  import { defineProps } from 'vue';

  const {pilotData} = defineProps({
    pilotData: Object,
    default: {}
  });

  console.log('IN CARD PILOT - ', pilotData);
</script>

<template>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{pilotData.info.name}}</h5>
        </div>
       
        <div class="card-body">
            <p class="card-text">
                <b>Name: </b> ffff<br>
                <b>Model: </b> ssdsds<br>
                <b>Manufacturer: </b> svcxvcxv<br>
            </p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">cost in credits: </li>
            <li class="list-group-item">starship class: </li>
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