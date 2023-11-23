import { defineStore } from 'pinia'
import { fetchStudentInfo, opstUpdateStudentInfo, deleteStudent } from '@/api/apiStudents';

export const useStudent = defineStore('student',{
    state: () => ({
        studentId: null,
        student: {},
        isEdit: false,
        err: false,
        errMSG: ''
    }),

    getters: {
        
    },

    actions: {
        async getStudentInfo(id) {
            try {
                this.studentId = id;
                this.student = await fetchStudentInfo(id);
                console.log('In STORE student | getStudentInfo ', this.student);
    
                this.err = false;
                this.errMSG = '';
            } catch(error) {
                console.error("Error loading student Info:", error);
                this.err = true;
                this.errMSG = error.message; // Сохраняем сообщение об ошибке
            }
        },
        async updateStudentInfo(id, formData){
            try {
                const firstName = formData.get('firstName');
                const lastName = formData.get('lastName');
            
                //console.log('FirstName:', firstName);
                //console.log('LastName:', lastName);
                const response = await opstUpdateStudentInfo(id, formData);

                this.student.firstName = firstName;
                this.student.lastName  = lastName;
                //console.log(response);
                return {response, isResponse:true};
                
            } catch (error) {
                return {response:error.message, isResponse:false};
            }
        },

        async deleteStudent(id) {
            try {
                const response = await deleteStudent(id);
                return {response, isResponse:true};
                
            } catch (error) {
                return {response:error.message, isResponse:false};
            }
        }
    }
});
