<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import {useStudent} from '@/stores/studentStore';
    import FormStudent from '@/components/FormStudent.vue';
    import { onMounted, ref } from 'vue';

    const route = useRoute();
    const router = useRouter();
    const studentStore = useStudent();
    const studentId = route.params.id;

    const formResponseDel = ref('');

    studentStore.isEdit = false; // пи открытии страницы эдит выключен

    onMounted( async () => {
        await studentStore.getStudentInfo(studentId);
        console.log('Mounted HomeView - ',studentStore.student);
    });

    const toggleEdit = () => {
        studentStore.isEdit = !studentStore.isEdit;
    };

    const deleteStudent = async () => {
        const response = await studentStore.deleteStudent(studentStore.student.id);
        if (!response.isResponse) {
            formResponseDel.value = 'Не змогли видалити - '+ response.response;
        } else {
             // перекидываем на главную
            router.push(`/`);
            
        }
    }

</script>

<template>
    <div class="container">
        <h1> Інформація про студента № {{ studentStore.studentId }}</h1>
    </div>
    <div class="container">
        <div v-if="studentStore.err" class="alert alert-danger">{{ studentStore.errMSG }}</div>
        <div v-else class="row">
            <div class="col info-student">
                <p>ID: {{ studentStore.student.id }}</p>
                <p>Name: {{ studentStore.student.firstName }} {{ studentStore.student.lastName }}</p>
                <p>Group: {{ studentStore.student.group }}</p>
                <p>Rate: {{ studentStore.student.rate }}</p>
            </div>
            <div class="col">
                <button class="btn btn-warning" 
                        @click="toggleEdit">
                            {{ studentStore.isEdit ? 'Закрити' : 'Редагувати' }}
                </button>

                <button class="btn btn-danger" 
                        @click="deleteStudent">
                            Видалити
                </button>
                <div v-if="formResponseDel">
                    <div class="alert alert-danger">{{ formResponseDel }}</div>
                </div>
                <div v-if="studentStore.isEdit">
                    
                    <FormStudent 
                        :student = studentStore.student 
                        clickBtn = "update">
                    </FormStudent>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    button {
        margin-right: 30px;
    }
    .info-student {
        text-align: center;
    }
</style>