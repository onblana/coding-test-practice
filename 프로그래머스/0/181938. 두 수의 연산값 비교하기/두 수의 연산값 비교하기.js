function solution(a, b) {
    const ab = Number(`${a}${b}`);
    const ab2 = 2 * a * b;
    
    if (ab >= ab2) return ab;
    return ab2;
}