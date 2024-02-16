const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = [];

rl.on('line', function (line) {
    arr = [...line];
}).on('close',function() {
    for (let i = 0; i < arr.length; ++i) {
        console.log(arr[i]);
    }
});