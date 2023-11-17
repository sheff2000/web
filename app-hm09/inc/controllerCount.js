const checkArguments = require('./check/argumentChecking.js');
const {isBinaryFile} = require('./check/fileCheck.js');
const countInFile = require('./read/readFile.js');

async function controllerCount() {
    try {
        console.log("\n ----  Input parameter checking started ---- ");
        const args = process.argv.slice(2);
        const argument = await checkArguments(args);

        if (!argument.err) {
            console.log('FilePath:', argument.filePath, 'CharCode:', argument.charCode);
            
            console.log("\n ---- Check the file ---- ");
            argument.isBinary = await isBinaryFile(argument.filePath);
            console.log('File is BINARY - ', argument.isBinary);
            console.log('File is TXT    - ', !argument.isBinary);

            console.log("\n ----  Start read file ----- ");
            const result = await countInFile(argument);
            console.log(` .......\n
                          Completed count ....
                          char Code = ${argument.charCode} \t Symbol is - ${String.fromCharCode(argument.charCode)}\n
                          Find code / symbol in file COUNT = ${result}`);

        } else {
            console.log('Error in checking arguments!\n\tError message: ', argument.msg);
        }
    } catch (err) {
            throw new Error(err.message);
    }
}

module.exports = controllerCount;