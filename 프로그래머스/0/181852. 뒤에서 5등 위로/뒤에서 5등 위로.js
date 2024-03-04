const solution = (num_list) => {
    const sorted = num_list.sort((a, b) => a - b);
    const [n1, n2, n3, n4, n5, ...rest] = sorted;
    return rest;
}