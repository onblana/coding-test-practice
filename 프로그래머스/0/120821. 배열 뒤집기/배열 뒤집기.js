function solution(num_list) {
    let answer = [];
    const leng = num_list.length;
    for (let i = 0; i < leng; ++i) {
        answer.push(num_list.pop());
    }
    return answer;
}