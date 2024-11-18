function solution(names) {
    let index = 0;
    const answer = [];
    names.forEach((name, i) => {
        if (i === index) {
            answer.push(name);
            index += 5;
        }
    });
    return answer;
}