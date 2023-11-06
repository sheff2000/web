import jschardet from 'jschardet';
 // { encoding: "Big5", confidence: 0.99 }

function method2(arrBuffers) {
    return new Promise(resolve => {
      const results = {
        buffer: [],
        encod: [],
        confidence: []
      }
     
      for (let i = 0; i < arrBuffers.length; i++) {
        
        const tmp =  jschardet.detect(arrBuffers[i]);

        results.buffer.push(arrBuffers[i]);
        results.encod.push(tmp.encoding);
        results.confidence.push(tmp.confidence);
      }
      resolve(results); // Возвращаем массив результатов
    });
  }

  export default method2;