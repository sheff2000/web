import { defineStore } from 'pinia'
import { fetchstudents } from '@/api/apiStudents';

export const useStudents = defineStore('students',{
    state: () => ({
        countStudents: 0,
        students: [],
        nowPage: 1,
        err: false,
        errMSG: ''
    }),

    getters: {
        
    },

    actions: {
        async getStudents() {
            try {
              
                this.students = await fetchstudents();
                this.countStudents = this.students.length;
                console.log('In STORE students | getStudents ',this.students);

                this.err = false;

            } catch(error) {
                console.error("Error loading students:", error);
                this.err = true;
                this.errMSG = error;
            }
        },
    }
});
