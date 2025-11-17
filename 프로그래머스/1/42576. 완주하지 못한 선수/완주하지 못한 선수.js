function solution(participant, completion) {
    const map = new Map();
    
    for (let i = 0; i < completion.length; ++i) {
        const name = completion[i];
        if (!map.has(name)) map.set(name, 1);
        else map.set(name, map.get(name) + 1);
    }
    
    for (let i = 0; i < participant.length; ++i) {
        const name = participant[i];
        if (!map.has(name)) return name;
        if (map.get(name) === 0) return name;
        map.set(name, map.get(name) - 1);
    }
}