<script setup>
  import BlinkText from '../BlinkText.vue';
  const {pilotData} = defineProps({
    pilotData: Object,
    default: {}
  });
</script>

<template>
    <div class="card" style="width: 18rem;" :class="{ 'card-cmpl': pilotData.ready, 'card-load': !pilotData.ready }">
        <div class="card-body">
            <BlinkText v-if="!pilotData.ready" :stopFlag="!pilotData.ready" />
            <h5 v-else class="card-title">{{pilotData.info.name}}</h5>
            <div>
                <p>
                    <b>Birth year: </b> {{pilotData.info.birth_year}}<br>
                    <b>Gender: </b> {{pilotData.info.gender}}<br>
                    <b>Height: </b> {{pilotData.info.height}}<br>
                </p>
            </div>
        </div>
       
    </div>
</template>
<style scoped>
    .card {
        margin-top: 15px;
        color: #f8f9fa;
    }
    .card-cmpl {
        background-color: #8e97a0;
    }
    .card-load {
        background-color: #b28888;
    }
    .card-title {
        color: #0b5a6a;
    }
</style>