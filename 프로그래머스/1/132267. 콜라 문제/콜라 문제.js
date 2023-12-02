let emptySum = 0;

function solution(a, b, n) {
  if (n < a) return emptySum;
  else {
      let empty = Math.floor(n / a) * b;
      emptySum += empty;
      return solution(a, b, empty + n % a);
  }
}