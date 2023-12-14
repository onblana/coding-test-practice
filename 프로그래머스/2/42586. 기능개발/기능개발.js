function solution(progresses, speeds) {
    const answer = [];
    let finished = 0;
    
    while (progresses.length > 0) {     
        for (let i = 0; i < progresses.length; ++i) {
            // 진도율을 각각 더해줌
            progresses[i] += speeds[i];
        }
        while (progresses[0] >= 100) {
            // 첫번째작업이 100 이상이면 shift를 반복하며 카운트
            progresses.shift();
            speeds.shift();
            ++finished;
        }
        if (finished > 0) {
            answer.push(finished);
            finished = 0;
        }
    }
    return answer;
}