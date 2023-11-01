<script setup>
    
    const { name, isDisabled , text} = defineProps({
        name: {
            type: String
        },
        text: {
            type: String,
            default: 'Page'
        },
        isDisabled: {
            type: Boolean,
            default: true
        }
    });
</script>
<template>
    <button class="btn btn-outline-light" 
        :disabled="isDisabled"  
        @click="$emit('clickBTN', name)">

            {{ text }}

    </button>
</template>