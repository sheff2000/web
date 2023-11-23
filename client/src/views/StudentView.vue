<script setup>
    import { useRoute } from 'vue-router';
    import {useStudent} from '@/stores/studentStore';
    import { onMounted, ref } from 'vue';

    const route = useRoute();
    const studentStore = useStudent();
    const studentId = route.params.id;

    const formResponse = ref('');

    studentStore.isEdit = false; // пи открытии страницы эдит выключен

    onMounted( async () => {
        await studentStore.getStudentInfo(studentId);
        console.log('Mounted HomeView - ',studentStore.student);
    });

    const toggleEdit = () => {
        studentStore.isEdit = !studentStore.isEdit;
    };

    const submitForm = async (event) => {
        event.preventDefault(); // отмена стандартной отправки
        const formData = new FormData(event.target);
       
        const response = await studentStore.updateStudentInfo(studentStore.student.id, formData);

        if (!response.isResponse) {
            formResponse.value = 'Помилка при спробі оновити дані! : '+ response.response;
        } else {
            formResponse.value = 'Все ок - дані оновили ';
        }

        console.log('RESPONSE after update - ',response);
    };
</script>

<template>
    <div class="container">
        <h1> Інформація про студента № {{ studentStore.studentId }}</h1>
    </div>
    <div class="container">
        <div v-if="studentStore.err" class="alert alert-danger">{{ studentStore.errMSG }}</div>
        <div v-else class="row">
            <div class="col">
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
                <div v-if="studentStore.isEdit">
                    <form class="alert alert-light" @submit="submitForm">
                        <div v-if="formResponse">{{ formResponse }}</div>
                        <input type="hidden" name="id" :value=studentStore.student.id>
                        <div class="mb-3">
                            <div class="input-group">
                                <span class="input-group-text">First and last name</span>
                                <input type="text" name="firstName" aria-label="First name" class="form-control" :value=studentStore.student.firstName required>
                                <input type="text" name="lastName" aria-label="Last name" class="form-control" :value=studentStore.student.lastName required>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="inputGroup-sizing-default">Group</span>
                                <input type="text" class="form-control" :value=studentStore.student.group disabled>
                                <span class="input-group-text" id="inputGroup-sizing-default">Rate</span>
                                <input type="text" class="form-control" :value=studentStore.student.rate disabled>
                            </div>

                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>