function solution(array, n) {
    let count = 0;
    array.forEach(num => num === n ? ++count : 0);
    return count;
}