<script setup>
    const { blinkText, stopFlag } = defineProps({
        blinkText: {
            type: String,
            default: 'Load ...'
        },
        stopFlag: {
            type: Boolean
        }
    });

   //console.log('flag - ', stopFlag);
</script>

<template>
    <span class="blink" v-if="stopFlag">{{ blinkText }} </span>
    <span v-else>Alredy load</span>
</template>

<style scoped>
      span {
        color: green;
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