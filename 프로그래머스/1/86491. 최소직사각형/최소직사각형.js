function solution(sizes) {
  const answer = 0;
  let before = [];
  let after = [];

  for(let i = 0; i < sizes.length; ++i) {
    sizes[i].sort((a, b) => a - b);
    before.push(sizes[i][0]);
    after.push(sizes[i][1]);
  }

  const beforeMax = Math.max(...before);
  const afterMax = Math.max(...after);

  return beforeMax * afterMax;
}