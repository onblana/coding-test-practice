function solution(n) {
    if (n % 2 === 0) n -= 1;
    const answer = [];
    for (let i = n; i > 0; i -= 2) {
        answer.unshift(i);        
    }
    return answer;
}