const checkArguments = require('./inc/argumentChecking.js');
const readFile       = require('./inc/countSymbolInFile.js');

async function start(){
    try {
        const argument = await checkArguments();

        if (!argument.err) {
            console.log('FilePath:', argument.filePath, 'CharCode:', argument.charCode);
            readFile(argument.filePath, argument.charCode);
        } else {
            console.log('Error in checking arguments!\n\tError message: ', argument.msg);
        }
    } catch(err) {
        console.log('Error:', err.message);
    }
};


/* 
 - проверка аргументов на наличие и соответствие требованиям 
 - определить размер в байтах код, который мы ищем/ как то определить ввели ли ютф-8 код?

 - проверка файла 
    на наличие и доступность
    на  тип файла - бинарный или текстовый (текстовый - цсв, ткт, ртф, хтмл и др)
    если файл бинарный - тупой поиск по цыклу
    если файл текстовый - то поиск симвлова по коду в кодировке ??? но как ???



файлы могут быть банарными и текстовыми
для бинарных - ищем последовательность в массиве буфера

для текстовых - бывают разные кодировки и разные размеры кода символа
определить кодировку мы не можем - проверяем все варианты
*/

console.time('execution-time');
start()
    .then(() => {
        console.timeEnd('execution-time');
    })
    .catch(err => {
        console.error('Error:', err.message);
        console.timeEnd('execution-time');
    });



