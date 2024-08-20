function solution(s1, s2) {
    let answer = 0;
    s1.forEach(str => s2.includes(str) ? ++answer : -1);
    return answer;
}