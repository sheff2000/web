import { defineStore } from 'pinia';
import {fetchPilot} from '@/api/swapi';

export const usePilots = defineStore('pilots',{
    state: () => ({
        pilots_info: [],  // массив обектов (ссылка, инфва про пилота, флаг готовности инфы)
        nowLoad: true,    // true - диет загрузка данных
        shipName: null,   // название коробля
        shipModel: null,  // название модели корабля
        error: false,     // флаг наличия ошибки
        textError: null
    }),

    getters: {
     
    },

    actions: {
        async setPilots_url(pilots_url) {
            this.pilots_info = [];
            pilots_url.forEach( (item) => {

                const pilot_info = {
                    url: null,
                    ready: false,
                    info: {},
                };

                pilot_info.url = item;

                this.pilots_info.push(pilot_info);
            });

            //console.log(this.pilots_info);
        },

        async getPilotsInfo() {
            this.nowLoad = true;
            try {
                this.nowLoad = true;
                //console.log('Start FETCH PILOT');
                for (const item of this.pilots_info) {
                    const tmp = await fetchPilot(item.url);
                    
                    item.info = tmp;
                    item.ready = true;
                    //console.log('Load pilots url - ', item.url, ' Ready = ', item.ready);
                }
                //console.log('END FETCH PILOTS');
                //console.log('get data PILOT - ', this.pilots_info);
                this.error = false;
            } catch (error) {
                console.error("Error loading pilots:", error);
                this.error = true;
                this.textError = `Error loading pilots: ${error}`;
            } finally {
                this.nowLoad = false;
            }
        }
    }
});


