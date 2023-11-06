
// рпосто віводим все в ютф-8
function method1(arrBuffer, cod) {
    return new Promise(resolve => {
        const results = arrBuffer.map(buffer => buffer.toString(cod));
        resolve(results);
    });
  }

export default method1;