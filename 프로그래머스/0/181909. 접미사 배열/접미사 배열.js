function solution(my_string) {
    const answer = [];
    let str = '';
    for (let i = my_string.length - 1; i >= 0; --i) {
        str = my_string[i].concat(str);
        answer.push(str);
    }
    return answer.sort();
}