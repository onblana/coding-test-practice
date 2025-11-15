function solution(participant, completion) {
    participant.sort();
    completion.sort();
    const iterate = participant.length
    
    for (let i = 0; i < iterate; ++i) {
        if (participant[i] !== completion[i]) return participant[i];
    }
}