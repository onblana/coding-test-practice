function solution(my_string, n) {
    const arr = [...my_string];
    return arr.map(char => char.repeat(n)).join('');
}