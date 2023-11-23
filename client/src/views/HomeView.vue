<script setup>
    import {useStudents} from '@/stores/studentsStore';
    import { onMounted } from 'vue';
    import StudentsTable from '@/components/StudentsTable.vue';

    const studentsStore = useStudents();
    onMounted(() => {
        studentsStore.getStudents();
    });
</script>

<template>
    <div class="container">
        <h1>Список студентів </h1>
        <small>всього студентів - {{ studentsStore.countStudents }}</small> 
        <div class="alert alert-info">
            <p>Для редагування або перегляду детальної інформації про студента - <b>натисніть на рядок з ним</b></p>
        </div>
    </div>
    <div v-if="studentsStore.err" class="alert alert-danger">{{ studentsStore.errMSG }}</div>
    <div class="container text-center" v-else>
        <div class="alert alert-warning" v-if="studentsStore.students.length === 0">
            await .... not data to view
        </div>
        <div v-else>
            <StudentsTable :students = studentsStore.students></StudentsTable>
        </div>
    </div>
</template>