function solution(a, b) {
    const ab = Number(a + '' + b);
    const ba = Number(b + '' + a);
    
    if (ab >= ba) return ab;
    if (ab < ba) return ba;
}