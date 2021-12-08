/**
 * 문제 : https://programmers.co.kr/learn/courses/30/lessons/67256
 */

const example = [
  { numbers: [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], hand: 'right', result: 'LRLLLRLLRRL' },
  { numbers: [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], hand: 'left', result: 'LRLLRRLLLRR' },
  {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    hand: 'right',
    result: 'LLRLLRLLRL',
  },
];

example.forEach(({ numbers, hand, result }, idx) => {
  console.log(`${idx} is ${solution(numbers, hand) === result ? 'pass' : `fail ${solution(numbers, hand)}`}`);
});

function solution(numbers, hand) {
  const answer = [];
  let [leftPinger, rightPinger] = ['*', '#'];

  const [leftNumbers, rightNumbers] = [
    [1, 4, 7],
    [3, 6, 9],
  ];
  const record = {
    1: { 2: 1, 5: 2, 8: 3, 0: 4 },
    4: { 2: 2, 5: 1, 8: 2, 0: 3 },
    7: { 2: 3, 5: 2, 8: 1, 0: 2 },
    '*': { 2: 4, 5: 3, 8: 2, 0: 1 },
    2: { 2: 0, 5: 1, 8: 2, 0: 3 },
    5: { 2: 1, 5: 0, 8: 1, 0: 2 },
    8: { 2: 2, 5: 1, 8: 0, 0: 1 },
    0: { 2: 3, 5: 2, 8: 1, 0: 0 },
    3: { 2: 1, 5: 2, 8: 3, 0: 4 },
    6: { 2: 2, 5: 1, 8: 2, 0: 3 },
    9: { 2: 3, 5: 2, 8: 1, 0: 2 },
    '#': { 2: 4, 5: 3, 8: 2, 0: 1 },
  };

  numbers.forEach((number) => {
    if (leftNumbers.includes(number)) {
      answer.push('L');
      leftPinger = number;
    } else if (rightNumbers.includes(number)) {
      answer.push('R');
      rightPinger = number;
    } else {
      if (record[leftPinger][number] > record[rightPinger][number]) {
        answer.push('R');
        rightPinger = number;
      } else if (record[leftPinger][number] < record[rightPinger][number]) {
        answer.push('L');
        leftPinger = number;
      } else {
        if (hand === 'right') {
          answer.push('R');
          rightPinger = number;
        } else {
          answer.push('L');
          leftPinger = number;
        }
      }
    }
  });

  return answer.join('');
}

/**
 * 단순 무식한 방법으로 해결하기! (21. 12. 08.)
 */
