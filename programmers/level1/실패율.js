/**
 * 문제 : https://programmers.co.kr/learn/courses/30/lessons/42889
 */

const example = [
  { N: 5, stages: [2, 1, 2, 6, 2, 4, 3, 3], result: [3, 4, 2, 1, 5] },
  { N: 4, stages: [4, 4, 4, 4, 4], result: [4, 1, 2, 3] },
];

example.forEach(({ N, stages, result }, idx) => {
  console.log(`${idx} is [${solution(N, stages)}] & result: [${result}]`);
});

function solution(N, stages) {
  const location = new Array(N + 1).fill(0);
  const clears = new Array(N + 2).fill(0);

  stages.forEach((stage) => {
    if (stage !== N + 1) location[stage]++;
    clears[stage]++;
  });

  for (let i = clears.length - 1; i > 0; i--) {
    clears[i - 1] += clears[i];

    if (i === clears.length - 1) continue;

    clears[i] = { value: location[i] / clears[i], idx: i };
  }

  const answer = clears.slice(1, clears.length - 1);

  answer.sort((o1, o2) => {
    return o2.value - o1.value;
  });

  return answer.map((v) => v.idx);
}

/**
 * 뭔가 더 좋은 방법이 있을 듯. (21. 12. 09.)
 */
