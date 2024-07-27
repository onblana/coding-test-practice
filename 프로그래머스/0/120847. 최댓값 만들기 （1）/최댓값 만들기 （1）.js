function solution(numbers) {
    [x, y] = numbers.sort((a, b) => b - a);
    return x * y;
}