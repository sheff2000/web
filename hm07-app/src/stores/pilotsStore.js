import { defineStore } from 'pinia';
import {fetchPilot} from '@/api/swapi';

export const usePilots = defineStore('pilots',{
    state: () => ({
        pilots_info: [],
        shipName: null,
        shipModel: null,
        error: false,
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

            console.log(this.pilots_info);
        },

        async getPilotsInfo() {
            try {
                this.pilots_info.forEach( async (item, index) => {
                    const tmp = await fetchPilot(item.url);
                    item.ready = true;
                    item.info = tmp;
                });

                console.log('get data  PILOT - ', this.pilots_info);
               /* const tmp_ships = await fetchStarships();

                console.log('get data - ', tmp_ships);
                console.log('next - ', tmp_ships.next);
                console.log('prev - ', tmp_ships.prev);
                console.log('count - ', tmp_ships.count);
                console.log('count on Page - ', tmp_ships.results.length);

                this.countAllShips = tmp_ships.count;
                this.countInNowPageShips = tmp_ships.results.length;
                this.ships = tmp_ships.results; */

                this.error = false;

            } catch(error) {
                console.error("Error loading starships:", error);
                this.error = true;
                this.textError = `Error loading starships: ${error}`;
            } 
        }
    }
});


