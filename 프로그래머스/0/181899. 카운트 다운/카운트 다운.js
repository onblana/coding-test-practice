function solution(start, end) {
    const answer = [];
    answer.push(start);
    for (let i = start - 1; i >= end; --i) {
        answer.push(i);
    }
    return answer;
}