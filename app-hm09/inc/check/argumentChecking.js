const fs = require('fs/promises');
const { constants } = require('fs');
const path = require('path');

async function argumentChecking(args){
    
    const res  = {
        err: true,
        msg: 'Error - unknow',
        filePath: null,
        charCode: null,
        byteSize: 0
    };
    // check number arguments
    if (args.length != 2) {
        res.err = true;
        res.msg = "No arguments.\n Use: node app.js <file Path> <code Symbol>";
        return res;
    }
    
    console.log("\u2714 (ok)  .... Having 2 arguments");

    res.filePath = args[0];
    res.charCode = args[1];

    if (isNaN(res.charCode)) {
        res.err = true;
        res.msg = `<code Symbol> is must be an integer.\n  You set <code Symbol> - ${res.charCode}`;
        return res;
    }

    console.log("\u2714 (ok)  .... Second argument - its integer");

    if (res.charCode <= 0x7F) {
        res.byteSize = 1;
    } else if (res.charCode <= 0x7FF) {
        res.byteSize = 2;
    } else if (res.charCode <= 0xFFFF) {
        res.byteSize = 3;
    } else if (res.charCode <= 0x10FFFF) {
        res.byteSize = 4;
    } else {
        res.err = true;
        res.msg = `Code point is out of range. You set <code Symbol> - ${res.charCode}`;
        return res;
    }

    console.log("\u2714 (ok)  .... Second argument size - between 1 and 4 Byte (", res.byteSize ," byte)");
    // check access to file
    try {
        await fs.access(res.filePath, constants.R_OK);
        console.log("\u2714 (ok)  .... Access to file '" + path.resolve(res.filePath));
      } catch {
        res.err = true;
        res.msg = `Cannot access to file!\n You set <file Path> - ${path.resolve(res.filePath)}`;
        return res;
      } 

    res.err = false;

    return res;
}

module.exports = argumentChecking;