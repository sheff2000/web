import iconv from 'iconv-lite';
import readline from 'readline';
import jschardet from 'jschardet';


class CodeBufferClass {

    static method1(buffer){
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
          
          
          console.log('Декодування в UTF-8 - ', buffer.toString());

          rl.question('Строка має нормальний вигляд? (1 - так, інше - ні): ', (answer) => {

            rl.close();
            if (answer === '1') {
                console.log('срічка закодована в UTF-8');
                return 'utf8';
            }
            else {
                console.log('напевне стрічка в utf16le - ', buffer.toString('utf16le'));
                return 'utf16le';
            }
            
          });
    }

    static method2(buffer){
        return jschardet.detect(buffer); // { encoding: "Big5", confidence: 0.99 }
    }

    static method3(buffer, possibleEncodings){

        let decodedString = null;
        for (const encoding of possibleEncodings) {
            try {
              decodedString = buffer.toString(encoding);
              break;
            } catch (error) {
              console.error(`Decoding with ${encoding} failed.`);
            }
        }
          
        if (decodedString) {
            console.log('Decoded string:', decodedString);
            return decodedString;
        } else {
            console.error('Unable to determine encoding.');
        }
    }
} 

export default CodeBufferClass;