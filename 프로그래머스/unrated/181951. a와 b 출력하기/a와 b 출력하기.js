const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', (string) => {
    const ab = string.split(' ');
    console.log(`a = ${ab[0]}\nb = ${ab[1]}`);
    rl.close();
});