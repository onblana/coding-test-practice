function solution(strings, n) {
    let answer = strings.sort((a, b) => {
        if (a[n] === b[n]) {
            if (a > b) return 1;
            else if (a < b) return -1;
            else return 0;
        }
        else if (a[n] > b[n]) return 1;
        else if (a[n] < b[n]) return -1;
        
    });
    return answer;
}

// sort 메소드의 콜백 compareFn(a, b)의 return값이
// > 0(양수)이면 sort a after b, e.g. [b, a]
// < 0(음수)이면 a를 b의 앞에 정렬 [a, b]
// === 0이면 원래의 순서를 유지
