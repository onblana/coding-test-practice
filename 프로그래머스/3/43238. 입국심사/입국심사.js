function solution(n, times) {
  times.sort((a, b) => a - b); // 오름차순 정렬
  let left = 0;
  let right = times[times.length - 1] * n;
  let middle = Math.floor((left + right) / 2);

  while (left <= right) {
    const enter = times.reduce((acc, current) => acc + Math.floor(middle / current), 0);
    if (enter >= n) right = middle - 1;
    else if (enter < n) left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return left;
}

// 테스트케이스 3/9만 통과되는 불완전한 코드
// function solution(n, times) {
//   let minute = 0;
//   let t = times.slice(); // 배열 얕은복사
//   while (n > 0) {
//     for (let i = 0; i < t.length; ++i) {
//       t[i] -= 1;
//       if (t[i] == 0) {
//         t[i] = times[i];
//         n--;
//       }
//     }
//     ++minute;
//   }
//   return minute;
// }