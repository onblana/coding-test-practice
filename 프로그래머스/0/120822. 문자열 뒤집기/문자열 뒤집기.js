function solution(my_string) {
    const last = my_string.length - 1;
    const result = [];
    for (let i = last; i >= 0; --i) {
        result.push(my_string[i]);
    }
    return result.join('');
}