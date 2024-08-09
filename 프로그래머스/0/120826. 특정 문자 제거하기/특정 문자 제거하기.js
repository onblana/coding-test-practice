function solution(my_string, letter) {
    const arr = [...my_string];
    const answer = arr.filter(char => char !== letter);
    return answer.join('');
}