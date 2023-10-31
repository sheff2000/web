<script setup>
import { ref, watch } from 'vue';
import { useShips } from '@/stores/shipStore';

const ships = useShips();
const progressBarWidth = ref(0);
let interval;

// Наблюдение за значением ships.nowLoad
watch(() => ships.nowLoad, (value) => {
    if (value) { // если ships.nowLoad = true
        progressBarWidth.value = 0;
        interval = setInterval(() => {
            if (progressBarWidth.value < 100) {
                progressBarWidth.value++;
            } else {
                clearInterval(interval); // останавливаем интервал, когда достигнуто значение 100
            }
        }, 10); // обновляем каждые 5 миллисекунд
    } else { // если ships.nowLoad = false
        clearInterval(interval);
        progressBarWidth.value = 0;
    }
});

</script>

<template>
    <div v-if="ships.nowLoad" class="progress" role="progressbar" aria-label="Success example" :aria-valuenow="progressBarWidth" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-success" :style="{ width: progressBarWidth.value + '%' }"></div>
    </div>
</template>
