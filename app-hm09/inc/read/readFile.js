const fs = require('fs/promises');

async function countInFile(args) {
    try {
        const data = await fs.readFile(args.filePath);
        let count = 0;

        // для текстового файла
        if (!args.isBinary) {
            const targetChar = String.fromCharCode(args.charCode); // переводим код в символ

            const dataString = data.toString('utf8'); // конвертим байтовый буфер в строку типа с ютф-8
            // не знаю как сделать что б оно автоматом пыталось понять ютф8 или ютф16
            // ну и дальше уже по символьно перебераем файл
            // ASCII по кодам совпадает с ютф - так что все должно быть норм
            for (const char of dataString) {
                if (char === targetChar) {
                    count++;
                }
            }
            return count;
        }

        // бинарный файл либо многобайтовый код
        if (args.isBinary || args.byteSize > 1) {
            for (let i = 0; i <= data.length - args.byteSize; i += args.byteSize) {
                let found = true;
                for (let j = 0; j < args.byteSize; j++) {
                    // так ... вырезали кусок нужно размера и по байтам его сверяем
                    // если я не запутался то получится примерно так
                    if (data[i + j] !== parseInt(args.charCode.slice(j * 2, j * 2 + 2))) {
                        found = false;
                        break;
                    }
                }
                if (found) count++;
            }
        } else {
            // остались одно байтовые
            for (let i = 0; i < data.length; i++) {
                if (data[i] === parseInt(args.charCode)) {
                    count++;
                }
            }
        }
        return count;

    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

module.exports = countInFile;