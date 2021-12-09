/**
 * 문제 : https://programmers.co.kr/learn/courses/30/lessons/87389
 */

const example = [
  { n: 10, result: 3 },
  { n: 12, result: 11 },
];

example.forEach(({ n, result }, idx) => {
  console.log(`${idx} is ${solution(n) === result ? 'pass' : `fail ${solution(n)}`}`);
});

function solution(n) {
  for (let i = 2; i <= n - 1; i++) {
    if ((n - 1) % i === 0) return i;
  }
}

/**
 * 쉬운 기본문제 (21. 12. 09.)
 */
