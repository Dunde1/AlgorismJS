/**
 * 문제 : https://programmers.co.kr/learn/courses/30/lessons/17682
 */

const example = [
  { dartResult: '1S2D*3T', answer: 37 },
  { dartResult: '1D2S#10S', answer: 9 },
  { dartResult: '1D2S0T', answer: 3 },
  { dartResult: '1S*2T*3S', answer: 23 },
  { dartResult: '1D#2S*3S', answer: 5 },
  { dartResult: '1T2D3D#', answer: -4 },
  { dartResult: '1D2S3T*', answer: 59 },
];

example.forEach(({ dartResult, answer }, idx) => {
  console.log(`${idx} is ${solution(dartResult) === answer ? 'pass' : `fail ${solution(dartResult)}`}`);
});

function solution(dartResult = '') {
  let answer = [0, 0, 0];
  let count = -1;

  for (let i = 0; i < dartResult.length; i++) {
    let word = dartResult[i];

    if (word.match(/[0-9]/)) {
      if (word === '1' && dartResult[i + 1] === '0') {
        answer[++count] = 10;
        i++;
      } else answer[++count] = Number(word);
    } else if (word.match(/[SDT]/)) {
      if (word === 'D') answer[count] *= answer[count];
      else if (word === 'T') answer[count] *= answer[count] ** 2;
    } else {
      if (word === '#') answer[count] *= -1;
      else {
        answer[count - 1] *= 2;
        answer[count] *= 2;
      }
    }
  }

  return answer[0] + answer[1] + answer[2];
}

/**
 * 무식한 방법으로 풀기 (21. 12. 09.)
 */
