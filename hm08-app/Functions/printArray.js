// arr = [ [] , [], [] ...] 
function printArray({arr, encod, confidence}, code = false) {

    const maxLength = arr.reduce((max, buffer) => {
        const length = buffer.length;
        return length > max ? length : max;
    }, 0);

    let minus = '──';
    for (let index = 0; index < maxLength; index++) {
        minus = minus + '───'; 
    }



    console.log(`┌─────┬────────${minus}───┐`);
    arr.forEach((buf, index)=> {
        const spaces = ' '.repeat((maxLength - buf.length)*3);
        if (!encod) {
            if (!code) {
                console.log('│ ', index, ' | ', buf  );
            } else {
                console.log('│ ', index, ' | ', buf.toString(code)  );
            }
        } else {
            console.log('│ ', index, ' | ', buf , spaces, ' | ', encod[index], '  з вірогідністю ', confidence[index]*100, '%' );
        }
        
        
    });  
    console.log(`└─────┴────────${minus}───┘`);

}

export default printArray;