<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    import { defineProps } from 'vue';
    import {useStudent} from '@/stores/studentStore';
    import {useStudents} from '@/stores/studentsStore';

    const router = useRouter();
    const studentStore = useStudent();
    const studentsStore = useStudents();
    const formResponse = ref('');
    
    const props = defineProps({
        student: Object,
        clickBtn: String
    });

    console.log('FORM HTML. clickBtn = ', props.clickBtn);

    const submitForm = async (event) => {
        const formData = new FormData(event.target);
       
        const response = await studentStore.updateStudentInfo(studentStore.student.id, formData);

        if (!response.isResponse) {
            formResponse.value = 'Помилка при спробі оновити дані! : '+ response.response;
        } else {
            formResponse.value = 'Все ок - дані оновили ';
        }

        console.log('RESPONSE after update - ',response);
    };

    const addStudent =  async (event) => {
        const formData = new FormData(event.target);
        const response = await studentsStore.addStudent(formData);
        if (!response.status) {
            formResponse.value = 'Error! Text - ' + response.msg;
        } else {
            router.push(`/`);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); // отмена стандартной отправки
        if (props.clickBtn === 'update') {
            await submitForm(event);
        } else {
            await addStudent(event);
        }
};
</script>

<template>
    <form class="alert alert-light" @submit=handleSubmit>
        <div v-if="formResponse">{{ formResponse }}</div>
        <input type="hidden" name="id" :value=student.id>
            <div class="mb-3">
                 <div class="input-group">
                    <span class="input-group-text">First and last name</span>
                    <input type="text" name="firstName" aria-label="First name" class="form-control" placeholder="First Name"
                        :value = "props.student.firstName" required>
                    <input type="text" name="lastName" aria-label="Last name" class="form-control" placeholder="Last Name"
                        :value = "props.student.lastName" required>
                </div>
             </div>
            <div class="mb-3">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Group</span>
                    <input type="text" name="group" class="form-control" placeholder="group: 100"
                        :value = props.student.group>
                    <span class="input-group-text" id="inputGroup-sizing-default">Rate</span>
                    <input type="text" name="rate" class="form-control" placeholder="rate: 9.2"
                        :value = props.student.rate>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</template>