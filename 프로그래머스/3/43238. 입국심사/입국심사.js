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