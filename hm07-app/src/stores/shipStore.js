import { defineStore } from 'pinia'
import { fetchStarships } from '@/api/swapi';

export const useShips = defineStore('ship',{
    state: () => ({
        countAllShips: 0,
        countInNowPageShips: 0,
        nowLoad: true, // флаг процесса загрузки, если тру - значит сейчас ждем ответ от АПИ
        ships: []
    }),

    getters: {
        currentPageShips: (state) => {
            return state.ships;
        }
    },

    actions: {
        async getShips() {
            try {
                const tmp_ships = await fetchStarships();

                console.log('get data - ', tmp_ships);
                console.log('next - ', tmp_ships.next);
                console.log('prev - ', tmp_ships.prev);
                console.log('count - ', tmp_ships.count);
                console.log('count on Page - ', tmp_ships.results.length);

                this.countAllShips = tmp_ships.count;
                this.countInNowPageShips = tmp_ships.results.length;
                this.ships = tmp_ships.results;

            } catch(error) {
                console.error("Error loading starships:", error);
            }
        }
    }
});





/*
export const useShips = defineStore('ships', {
  state: () => ({
    ships: [],
    countShip: 0,
    countShipOnThisPage: 0,
    nowPage: 0,
    // блок сообщения об ошибке
    error: false,
    textError: null,
  }),

  getters: {
    currentPageShips: (state) => {
        return state.ships[state.nowPage - 1] || [];
    },
    nextBtn: (state) => {
        // Вы можете добавить другую логику проверки, если необходимо
        return state.nowPage < state.ships.length;
    },
    prevBtn: (state) => {
        return state.nowPage > 0;
    }
  },

  actions: {
    async getShips(page = 1) {
        // на время загрузки - отклоючаем кнопки
        this.nextBtn = false;
        this.prevBtn = false;

        // смотрим есть ли у нас массив кораблей
        // и есть ли массив кораблей запрашиваемой страницы
        if (this.ships && this.nowPage - 1 >= 0 && this.nowPage - 1 < this.ships.length) {
        
        } else {
            // нет - значит згрузим с апи
            try {
                // получаем обект с данными для нужной страницы
                const tmp_ships = await fetchStarships(page);

                // смотрим есть ли в списке корабли вообще
                if (tmp_ships.results.length === 0) {
                    this.error = true;
                    this.textError = 'Count Star Ships of load - zero !';
                } else {
                    // инициализируем всяки переменные для этой страницы
                    this.countShip = tmp_ships.count;                       // общее число кораблей 
                    this.countShipOnThisPage = tmp_ships.results.length;    // число кораблей на этой странице
                    this.error = false;

                    // сотрим что там с кнопками назад/вперед
                    this.nextBtn = !tmp_ships.next ? false : true;
                    this.prevBtn = !tmp_ships.previous ? false : true;

                    this.ships[page - 1] = tmp_ships.results;

                };
            }
            catch (error) {
                console.error("Error loading starships:", error);
                this.error = true;
                this.textError = error.message;
            }
        }
    },

    async nextPage() {
        
        try {
            await this.getShips(this.nowPage+1);
            this.nowPage++;  // меняем номер страниц и по идее сразу меняется геттер currentPageShips
        } catch (error) {
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
}) */