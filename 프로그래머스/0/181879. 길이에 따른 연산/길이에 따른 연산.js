function solution(num_list) {
    return num_list.reduce(
        (a, c) => num_list.length > 10 ? a + c : a * c
    );
}