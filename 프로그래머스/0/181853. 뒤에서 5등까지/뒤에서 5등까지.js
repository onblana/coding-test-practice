function solution(num_list) {
    const arr = [];
    num_list.sort((a, b) => a - b);
    
    for (let i = 0; i < 5; ++i) {
        arr.push(num_list.shift());
    }
    
    return arr;
}