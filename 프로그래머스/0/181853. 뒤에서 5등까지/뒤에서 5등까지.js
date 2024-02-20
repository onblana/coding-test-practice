function solution(num_list) {
    const sorted = num_list.sort((a, b) => a - b);
    const arr = [];
    
    arr.push(sorted.shift());
    arr.push(sorted.shift());
    arr.push(sorted.shift());
    arr.push(sorted.shift());
    arr.push(sorted.shift());
    
    return arr;
}