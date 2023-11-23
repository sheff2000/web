<script setup>
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const router = useRouter();

const props = defineProps({
    students: {
        type: Array,
        required: true
    }
});

const pageStudentInfo = (id) => {
    router.push(`/student${id}`);
};
</script>

<template>
    <table class="table table-hover table-bordered">
        <thead>
            <tr class="table-dark">
                <td> ID </td>
                <td> First Name </td>
                <td> Last Name </td>
                <td> Group </td>
                <td> Rait </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in props.students" 
                :key="student.id" 
                class="table-light tr-student" 
                @click="pageStudentInfo(student.id)">

                <td>{{ student.id }}</td>
                <td>{{ student.firstName }}</td>
                <td>{{ student.lastName }}</td>
                <td>{{ student.group }}</td>
                <td>{{ student.rate }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style>
    .tr-student {
        cursor: pointer;
    }
</style>