const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:3000' // Замените на порт, на котором запущен ваш Express-сервер
  }
})
