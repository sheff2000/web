import { Buffer } from 'node:buffer';
import CodeBufferClass from './Classes/CodeBufferClass.js';

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

const possibleEncodings = ['utf16le', 'utf8'];

const maxLength = buffersArray.reduce((max, buffer) => {
    const length = buffer.length;
    return length > max ? length : max;
  }, 0);

let minus = '──';
for (let index = 0; index < maxLength; index++) {
    minus = minus + '───'; 
}


console.log('Задано буфер з закодованими стрічкам');
console.log(`┌─────┬────────${minus}───┐`);
buffersArray.forEach((buf, index)=> {
    const spaces = ' '.repeat((maxLength - buf.length)*3);
    console.log('│ ', index, ' | ', buf , spaces , ' |' );
});  
console.log(`└─────┴────────${minus}───┘`);


console.log('Визначимо кодування кожнох стрічки');
console.log('Метод №1 - візуальний');

let encodingArray = [,];

for (let index = 0; index < buffersArray.length; index++) {
    console.log('Перевіряемо строку - ', index);
    CodeBufferClass.method1(buffersArray[index]);
}

async function fun1(buf, index) {
    console.log('Перевіряемо строку - ', index);
    CodeBufferClass.method1(buf);
}

for (let index = 0; index < buffersArray.length; index++) {
    await fun1(buffersArray[index], index);
}

/*encodingArray[0] = buffersArray.map(async (buf, index) => {

    console.log('Перевіряемо строку - ', index);
    CodeBufferClass.method1(buf);
});
CodeBufferClass.method2(buffersArray[3], possibleEncodings);
*/