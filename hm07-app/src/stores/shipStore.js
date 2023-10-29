import { defineStore } from 'pinia'
import { fetchStarships } from '@/api/swapi';

export const useShips = defineStore('ships', {
  state: () => ({
    ships: null,
    countShip: 0,
    countShipOnThisPage: 0,
    nowPage: 0,
    error: false,
    textError: null
  }),

  getters: {
    currentPageShips: (state) => {
        if (state.nowPage === 0)
        {
            return [];
        }
        else 
        {
            return state.ships[state.nowPage -  1];
        }
        
      }
  },

  actions: {
    async getShips(page = 1) {
        try {
            // если еще нет вообще данных о кораблях
            // либо нет данных о кораблях для конкретной страницы
            if (!this.ships || !this.ships[this.nowPage - 1]) 
            {
                const tmp_ships = await fetchStarships(page);

                if (this.nowPage === 0) 
                {
                    this.ships = [tmp_ships.results];
                    this.nowPage = 1;
                } 
                else 
                {
                    this.ships[this.nowPage - 1] = tmp_ships.results;
                }

                console.log('LISt - ', tmp_ships);
                this.countShip = tmp_ships.count;
                this.countShipOnThisPage = tmp_ships.results.length;
                this.error = false;
            }
          } catch (error) {
            console.error("Error loading starships:", error);
            this.error = true;
            this.textError = error.message;
          }
    },

    async nextPage() {
        this.nowPage++;
        try {
            await this.getShips(this.nowPage);
        } catch (error) {
            this.prevPage(); // Возвращаем номер страницы назад
            if (error.response && error.response.status === 404) {
                this.error = true;
                this.textError = 'Страница не найдена - ' + error.response.data.detail;
            } else {
                this.error = true;
                this.textError = 'Произошла ошибка при загрузке данных';
            }
        }
    },

    async prevPage() {
        this.nowPage--;
        try {
            await this.getShips(this.nowPage);
        } catch (error) {
            this.nextPage(); // Возвращаем номер страницы назад
            if (error.response && error.response.status === 404) {
                this.error = true;
                this.textError = 'Страница не найдена - ' + error.response.data.detail;
            } else {
                this.error = true;
                this.textError = 'Произошла ошибка при загрузке данных';
            }
        }
    }

  
  },
})