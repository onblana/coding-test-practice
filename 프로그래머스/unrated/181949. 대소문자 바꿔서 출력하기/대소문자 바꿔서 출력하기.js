const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ASCII 대문자 65-90, 소문자 97-122
rl.on('line', (string) => {
    const chars = string.split('').map((char) => {
        if (char.charCodeAt() < 91) return char.toLowerCase();
        else return char.toUpperCase();
    });
    console.log(chars.join(''));
    rl.close();
});