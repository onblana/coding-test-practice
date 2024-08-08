function solution(my_string) {
    const arr = [...my_string];
    const result = [];
    for (let i = 0; i < my_string.length; ++i) {
        result.push(arr.pop());
    }
    return result.join('');
}