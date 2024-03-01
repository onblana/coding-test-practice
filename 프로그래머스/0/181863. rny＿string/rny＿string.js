function solution(rny_string) {
    const temp = rny_string.split('m');
    
    for (let i = 0; i < temp.length - 1; ++i) {
        temp[i] += 'rn';
    }
    
    return temp.reduce((acc, cur) => acc + cur);
}