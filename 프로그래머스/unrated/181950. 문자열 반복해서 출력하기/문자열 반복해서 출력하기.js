const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', (string) => {
    const arr = string.split(' ');
    let answer = '';
    while(arr[1] > 0) {
        answer = answer.concat(arr[0]);
        --arr[1]; // arr[1]은 원래 문자이나, 자바스크립트의 자동형변환으로 숫자로 변환됨
    }
    console.log(answer);
    rl.close();
});
