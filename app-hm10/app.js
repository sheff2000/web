const express = require('express');
const app = express();

// Установка EJS в качестве шаблонизатора
app.set('view engine', 'ejs');

// Указываем папку для статических файлов
app.use(express.static('public'));

// Настройка маршрутов
app.get('/', (req, res) => {
    res.render('index', { title: 'Главная страница' });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
