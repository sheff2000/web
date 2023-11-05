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


const codeBufferArray = buffersArray.map( (buffer) => CodeBufferClass.getCodeBuffer_typeIconv(buffer));

console.log(codeBufferArray);

buffersArray.forEach( (buffer, index) => {
    console.log(buffer.toString('utf16le'))
});



import jschardet from 'jschardet';

// Определить кодировку
const result = jschardet.detect(buffersArray[3]);

console.log('Определенная кодировка:', result.encoding, ' SLOVO - ', buffersArray[3].toString(result.encoding) );


const decodedCharacters = buffersArray[3].map(byte => {
    try {
      return String.fromCharCode(byte);
    } catch (e) {
      console.log('байт не в ютф8');
      return '\uFFFD'; // В случае ошибки декодирования, вернем символ U+FFFD
    }
  });

  const decodedString = decodedCharacters.join('');
console.log(decodedString);

//console.log('isEncoding UTF8 ', buffersArray[3].isEncoding('utf8'));
//console.log('isEncoding UTF16 ', buffersArray[3].isEncoding('utf16le'));
//console.log('проаверка на ис - buffer.isUtf8 - ', Buffer.isUtf8(buffersArray[3]));

function isUTF8(buffer) {
    let i = 0;
    while (i < buffer.length) {
      if (buffer[i] <= 0x7F) {
        // 1-байтовый символ (ASCII)
        i++;
      } else if (buffer[i] >= 0xC2 && buffer[i] <= 0xDF && i + 1 < buffer.length && buffer[i + 1] >= 0x80 && buffer[i + 1] <= 0xBF) {
        // 2-байтовый символ
        i += 2;
      } else if (buffer[i] >= 0xE0 && buffer[i] <= 0xEF && i + 2 < buffer.length && buffer[i + 1] >= 0x80 && buffer[i + 1] <= 0xBF && buffer[i + 2] >= 0x80 && buffer[i + 2] <= 0xBF) {
        // 3-байтовый символ
        i += 3;
      } else if (buffer[i] >= 0xF0 && buffer[i] <= 0xF4 && i + 3 < buffer.length && buffer[i + 1] >= 0x80 && buffer[i + 1] <= 0xBF && buffer[i + 2] >= 0x80 && buffer[i + 2] <= 0xBF && buffer[i + 3] >= 0x80 && buffer[i + 3] <= 0xBF) {
        // 4-байтовый символ
        i += 4;
      } else {
        // Некорректное кодирование
        return false;
      }
    }
    return true;
  }
  
  const buffer = Buffer.from([59, 4, 78, 4, 52, 4, 56, 4, 61, 4, 56, 4]);
  console.log(isUTF8(buffer), ' Stroka - ', buffer.toString('utf16le') ); // Вернет true, так как это корректная UTF-8 последовательность
  



  function detectEncoding(buffer) {
    if (buffer.length % 2 === 0) {
      let isUTF16LE = true;
      for (let i = 1; i < buffer.length; i += 2) {
        if (buffer[i] !== 0x00) {
          isUTF16LE = false;
          break;
        }
      }
  
      if (isUTF16LE) {
        return 'utf16le';
      }
    }
  
    return 'utf8'; // По умолчанию считаем, что это UTF-8
  }
  
  //const buffer = Buffer.from([59, 4, 78, 4, 52, 4, 56, 4, 61, 4, 56, 4]);
  const encoding = detectEncoding(buffer);
  console.log(encoding); // Вернет 'utf16le' в данном случае
  