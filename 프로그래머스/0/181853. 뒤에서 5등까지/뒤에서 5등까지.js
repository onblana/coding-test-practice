function solution(num_list) {
    num_list.sort((a, b) => a - b);
    const [a, b, c, d, e] = num_list;
    return [a, b, c, d, e];
}