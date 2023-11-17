const fs = require('fs/promises');

async function countSymbolInFile(filePath, charCode) {
    try {
        let count = 0;
        const data = await fs.readFile(filePath);
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            console.log('data['+i+'] = ', data[i], ' | CharCode - ', charCode );
            if (data[i] == charCode) {
                count++;
            }
        }
       console.log(`The symbol ${String.fromCharCode(charCode)} was found in file ${filePath} - ${count} times`);
            
    } catch (err) {
            throw new Error(err.message);
    }
    
   
   


    /*
    fs.readFile(filePath, 
                (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }

        // Підрахунок кількості входжень символу
        let count = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === charCode) {
                count++;
            }
        }

        // Виведення результату
        console.log(`The symbol ${String.fromCharCode(charCode)} was found in file ${filePath} - ${count} times`);
    }); */
}

module.exports = countSymbolInFile;