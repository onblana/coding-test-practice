function solution(num_list) {
    const copy = [...num_list];
    const last1 = copy[copy.length - 1];
    const last2 = copy[copy.length - 2];
    if (last1 > last2) {
        num_list.push(last1 - last2);
        return num_list;
    }
    num_list.push(last1 * 2);
    return num_list;
}