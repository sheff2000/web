import readline from 'readline';

function askUser(ask) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  
    return new Promise(resolve => rl.question(ask, ans => {
      rl.close();
      resolve(ans);
    }))
  }

  export default askUser;