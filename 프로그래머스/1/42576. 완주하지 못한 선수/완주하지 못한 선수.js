function solution(participant, completion) {
    // // 효율성테스트 실패
    // participant.forEach((name) => {
    //     if (completion.includes(name)) {
    //         completion.splice(completion.indexOf(name), 1);
    //     } else answer = name;
    // });
    
    participant.sort();
    completion.sort();
    for (let i = 0; i < participant.length; ++i) {
        if (participant[i] !== completion[i])
            return participant[i];
    }
}