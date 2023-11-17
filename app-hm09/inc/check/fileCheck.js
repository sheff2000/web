const fs = require('fs/promises');

async function isBinaryFileMethodZeroByte(filePath) {
    const data = await fs.readFile(filePath);
    const length = Math.min(1024, data.length); // для более точного - надо брать примерно 1К байт
    //console.log(data);
    for (let i = 0; i < length; i++) {
        // пишут что наличие байта 0x00  признак бинарника (в кодировке utf16le - определяет как бинарный :) )
        if (data[i] === 0) {
            return true;
        }
    }
    return false;
}

// 
async function whatBinaryType(filePath) {
    // library file-type  - ей можем примерно определить тип бинарника
    return false;
}

module.exports = {isBinaryFile:isBinaryFileMethodZeroByte, whatBinaryType};