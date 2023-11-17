const controllerCount = require('./inc/controllerCount.js');

async function start(){
    try {
        await controllerCount();

    } catch(err) {
        console.log('Error:', err.message);
    }
};

console.time('execution-time');
start()
    .then(() => {
        console.timeEnd('execution-time');
    })
    .catch(err => {
        console.error('Error:', err.message);
        console.timeEnd('execution-time');
    });



