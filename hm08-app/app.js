import { Buffer } from 'node:buffer';
import askUser from './Functions/askUser.js';
import printArray from './Functions/printArray.js';
import method1 from './Functions/method1.js';
import method2 from './Functions/method2.js';


const buffersArray = [
    Buffer.from([ 84, 4 ]),
    Buffer.from([ 67, 4 ]),
    Buffer.from([ 54, 4, 56, 4, 66, 4, 66, 4, 86, 4 ]),
    Buffer.from([ 59, 4, 78, 4, 52, 4, 56, 4, 61, 4, 56, 4]),
    Buffer.from([ 64, 4, 62, 4, 55, 4, 67, 4, 60, 4, 61, 4, 62, 4, 87, 4 ]),
    Buffer.from([ 18, 4, 56, 4, 50, 4, 71, 4, 53, 4, 61, 4, 61, 4, 79, 4 ]),
    Buffer.from([ 61, 4, 48, 4, 52, 4, 55, 4, 50, 4, 56, 4, 71, 4, 48, 4, 57, 4, 61, 4, 62, 4]),
    Buffer.from([ 63, 4, 64, 4, 62, 4, 51, 4, 64, 4, 48, 4, 60, 4, 67, 4, 50, 4, 48, 4, 61, 4, 61, 4, 79, 4 ]),
    Buffer.from([ 50, 4, 48, 4, 54, 4, 59, 4, 56, 4, 50, 4, 56, 4, 60, 4 ])
];

// const varEncodings = ['utf16le', 'utf8'];

console.log('Задано буфер з закодованими стрічкам');
printArray({arr:buffersArray});


method1(buffersArray, 'utf8')
  .then((res_method1) => {
    console.log('Метод 1 -  Візуальний.  Декодуємо по ЮТФ-8 та дивимось результат')
    printArray({arr:res_method1});
    return askUser('Результат ок? (1 - так / інше - ні): ');
  })
  .then((answer) => {
    if (answer.toLowerCase() === '1') {
      console.log('Отже це вірне кодування (UTF-8).');
    } else {
      console.log('Значит закодовано в UTF16le.');
      printArray({arr:buffersArray}, 'utf16le');
    }

    console.log('---------------------------');
    console.log('Метод - 2 - Тепер автоматичний метод визначення кодування.');
    return method2(buffersArray);
  })
  .then((res_method2) => {
    if (res_method2) {
        printArray({arr:res_method2.buffer, encod:res_method2.encod, confidence:res_method2.confidence}, 'utf16le');
        console.log('----------------------');
        console.log('Отже декодований по Метод-2 буфер має вигляд:');
        printArray({arr:res_method2.buffer}, res_method2.encod[0]);

        console.log('Що, чомусь, не відповідає дійсності.');
        console.log('================ ЗАКОДОВАНА ФРАЗА  ================');
        const arrSlova = [5,7,0,6,8,1,2,4,3];
        const fraza = arrSlova.map(slov => buffersArray[slov].toString('utf16le'));
        console.log(`========> ${fraza.join(' ')} <========`);
        console.log('================ .................  ================');
        
    }
  })
  .catch((error) => {
    console.error('Виникла помилка', error);
  });
