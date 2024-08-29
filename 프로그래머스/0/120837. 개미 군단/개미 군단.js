function solution(hp) {
    const general = parseInt(hp / 5); // 199
    const rest = hp  - (general * 5);
    if (rest === 4 || rest === 2) return general + 2;
    if (rest === 3 || rest === 1) return general + 1;
    return general;
}