/**
 * 문제 : https://programmers.co.kr/learn/courses/30/lessons/12932
 */

const example = [{ n: 12345, return: [5, 4, 3, 2, 1] }];

example.forEach(({ n, result }, idx) => {
  console.log(`${idx} is [${solution(n)}]`);
});

function solution(n) {
  const answer = [];

  while (n > 0) {
    answer.push(n % 10);
    n = parseInt(n / 10);
  }

  return answer;
}

/**
 * 쉬운 연습문제 (21. 12. 09.)
 */
