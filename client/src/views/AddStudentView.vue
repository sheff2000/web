<script setup>
import FormStudent from '@/components/FormStudent.vue';

</script>

<template>
     <div class="container">
        <h1>Додавання студента</h1>
        <FormStudent
            :student = {}
            clickBtn = "delete">
        </FormStudent>
     </div>
        
</template>