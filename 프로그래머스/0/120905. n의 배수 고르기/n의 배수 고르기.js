function solution(n, numlist) {
    const answer = [];
    numlist.forEach(num => num % n === 0 ? answer.push(num) : null);
    return answer;
}