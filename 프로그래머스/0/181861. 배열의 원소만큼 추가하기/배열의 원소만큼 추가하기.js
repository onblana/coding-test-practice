function solution(arr) {
    const answer = [];
    arr.forEach((num) => {
        for (let i = num; i > 0; --i) {
            answer.push(num);
        }});
    return answer;
}