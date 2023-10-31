import { defineStore } from 'pinia';

export const useHeader = defineStore('header',{
    
    state: () => ({
       nowPage: 'shipsList',
       titlePage: 'Star Ships List'
    }),

    getters: {
        
    },

    actions: {
        
    }
});


