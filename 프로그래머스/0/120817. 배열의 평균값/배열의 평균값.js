function solution(numbers) {
    const sum = numbers.reduce((a, c) => a + c);
    // let sum = 0;
    // for (num of numbers) {
    //     sum += num;
    // }
    return sum / numbers.length;
}