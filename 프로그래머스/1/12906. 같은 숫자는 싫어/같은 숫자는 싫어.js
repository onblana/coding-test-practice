function solution(arr) {
    const answer = [];
    arr.forEach((el, i) => {
        if (arr[i] !== arr[i + 1])
            answer.push(arr[i]);   
    });
    return answer;
}