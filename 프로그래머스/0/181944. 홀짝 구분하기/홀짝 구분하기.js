const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const n = Number(line);
    console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`);
    
    rl.close();
});