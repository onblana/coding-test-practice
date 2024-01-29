function solution(str1, str2) {
    let answer = '';
    let i2 = 0;
    for (let i = 0; i < str1.length + str2.length; ++i) {
        console.log('i2: ', i2);
        if (i % 2 === 0) {
            answer = answer.concat(str1[i2]);
        } else { 
            answer = answer.concat(str2[i2]);
            ++i2;
        }
    }
    return answer;
}