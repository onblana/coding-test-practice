function solution(dot) {
    let [x, y] = dot;
    if (x > 0) return y > 0 ? 1 : 4;
    if (x < 0) return y > 0 ? 2 : 3;
}