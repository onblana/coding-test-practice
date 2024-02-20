function solution(num_list) {
    const sorted = num_list.sort((a, b) => a - b);
    const arr = [];
    
    for (let i = 0; i < 5; ++i) {
        arr.push(sorted.shift());
    }
    
    return arr;
}