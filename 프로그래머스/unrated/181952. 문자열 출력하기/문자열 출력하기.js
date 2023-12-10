const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', (line) => { console.log(line); });

// const input = [];

// rl.on('line', (line) => {
//     input = [line];
// }).on('close', () => {
//     console.log(input[0]);
// });