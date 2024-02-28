function solution(num_list) {
    let odd = ''; // odd는 홀수
    let even = '';  // even은 짝수
    
    for (num of num_list) {
        num % 2 !== 0 ? odd += num : even += num;
    }
    
    return Number(odd) + Number(even);
}