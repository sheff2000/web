const fs = require('fs/promises');
const { constants } = require('fs');
const path = require('path');

async function argumentChecking(){
    
    console.log('----  Input parameter checking started ---- ');

    const args = process.argv.slice(2);
    const res  = {
        err: true,
        msg: 'Error - unknow',
        filePath: null,
        charCode: null
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

    if (res.charCode > 255) {
        res.err = true;
        res.msg = `<code Symbol> must be between 0 and 255!\n You set <code Symbol> - ${res.charCode}`;
        return res;
    }

    console.log("\u2714 (ok)  .... Second argument - between 0 and 255");
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