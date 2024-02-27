function solution(num_list) {
    // product: 곱
    const product = num_list.reduce((acc, cur) => acc * cur);
    // square: 제곱
    const sumSquare = num_list.reduce((acc, cur) => acc + cur) ** 2;
    if (product < sumSquare) return 1;
    return 0;
}