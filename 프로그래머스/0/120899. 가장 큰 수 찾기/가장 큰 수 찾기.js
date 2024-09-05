function solution(array) {
    const largest = array.reduce((acc, num) => acc < num ? num : acc);
    return [largest, array.indexOf(largest)];
}