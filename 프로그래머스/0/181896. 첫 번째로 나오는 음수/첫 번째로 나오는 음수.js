function solution(num_list) {
    const found = num_list.findIndex(e => e < 0);
    if (found === undefined) return -1;
    return found;
}