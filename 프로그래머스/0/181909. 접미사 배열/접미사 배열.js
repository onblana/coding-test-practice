function solution(my_string) {
    const arr = [...my_string];
    const answer = [];
    let str = '';
    for (let i = my_string.length - 1; i >= 0; --i) {
        str = arr[i].concat(str);
        answer.unshift(str);
    }
    return answer.sort();
}