import { defineStore } from 'pinia';
import {useShips} from '@/stores/shipStore';
import {usePilots} from '@/stores/pilotsStore';

export const useHeader = defineStore('header',{
    
    state: () => ({
       nowPage: 'shipsList',
       titlePage: 'Star Ships List'
    }),
   
    getters: {
        
            isLoadPage: (state) => {
            
                if (state.nowPage === 'shipsList')
                {
                    const store = useShips();
                    //console.log('SHIP load - ', store.nowLoad);
                    return store.nowLoad;
                }

                if (state.nowPage === 'pilots')
                {
                    const store = usePilots();
                    //console.log('Pilots load - ', store.nowLoad);
                    return store.nowLoad;
                }
            },
       
            blinkText: (state) => {
                
                if (state.nowPage === 'shipsList')
                {
                    //console.log('SHIP load -  Load Ships ...');
                    return 'Load Ships ... ';
                }

                if (state.nowPage === 'pilots')
                {
                    return 'Load pilots ...';
                }
                
        }
    },

    actions: {
        
    }
});


