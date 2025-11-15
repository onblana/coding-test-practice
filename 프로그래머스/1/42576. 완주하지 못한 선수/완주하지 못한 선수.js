function solution(participant, completion) {
    const map = new Map();

    for (let i = 0; i < completion.length; i++) {
        const name = completion[i];
        if (!map.has(name)) {
            map.set(name, 1);
        } else {
            map.set(name, map.get(name) + 1);
        }
    }

    for (let i = 0; i < participant.length; i++) {
        const name = participant[i];

        if (!map.has(name)) return name;

        const count = map.get(name);
        if (count === 0) return name;

        map.set(name, count - 1);
    }
}


// 정확도와 효율성 모두 통과하였으나 위의 Map을 사용한 코드가 더 효율적임
// function solution(participant, completion) {
//     participant.sort();
//     completion.sort();
//     const iterate = completion.length;
    
//     for (let i = 0; i < iterate; ++i) {
//         if (participant[i] !== completion[i]) return participant[i];
//     }
//     return participant[participant.length - 1];
// }