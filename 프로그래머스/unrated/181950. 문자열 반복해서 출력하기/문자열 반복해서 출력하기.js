const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', (string) => {
    const arr = string.split(' ');
    let answer = '';
    //--arr[1]; // string을 number로 변환
    while(arr[1] > 0) {
        answer = answer.concat(arr[0]);
        --arr[1];
    }
    console.log(answer);
});