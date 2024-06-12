function solution(n_str) {
    let answer = n_str;
    while (answer.startsWith('0')) {
        answer = answer.slice(1);
    }
    return answer;
}