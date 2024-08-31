function solution(my_string) {
    let answer = 0;
    for (const char of my_string) {
        const x = parseInt(char);
        if (!isNaN(x)) answer += x;
    }
    return answer;
}