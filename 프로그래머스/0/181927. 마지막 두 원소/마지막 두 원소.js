function solution(num_list) {
    const [last2, last] = num_list.slice(-2);
    last > last2 ? num_list.push(last - last2) : num_list.push(last * 2);
    return num_list;
}