function solution(numbers, n) {
    let sum = 0;
    for (let i = 0; sum <= n; i++) {
        sum += numbers[i];
    }
    return sum;
}