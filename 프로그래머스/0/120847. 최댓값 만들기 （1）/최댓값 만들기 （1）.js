function solution(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    return sorted.pop() * sorted.pop();
}