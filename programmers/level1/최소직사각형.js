/**
 * 문제 : https://programmers.co.kr/learn/courses/30/lessons/86491
 */

const example = [
  {
    sizes: [
      [60, 50],
      [30, 70],
      [60, 30],
      [80, 40],
    ],
    result: 4000,
  },
  {
    sizes: [
      [10, 7],
      [12, 3],
      [8, 15],
      [14, 7],
      [5, 15],
    ],
    result: 120,
  },
  {
    sizes: [
      [14, 4],
      [19, 6],
      [6, 16],
      [18, 7],
      [7, 11],
    ],
    result: 133,
  },
];

example.forEach(({ sizes, result }, idx) => {
  console.log(`${idx} is ${solution(sizes) === result ? 'pass' : `fail ${solution(sizes)}`}`);
});

function solution(sizes) {
  let sizeTmp = [0, 0];

  sizes.forEach((size) => {
    let [max, min] = size;

    if (min > max) [max, min] = [min, max];

    if (sizeTmp[0] < max) sizeTmp[0] = max;
    if (sizeTmp[1] < min) sizeTmp[1] = min;
  });

  return sizeTmp[0] * sizeTmp[1];
}

/**
 * 쉬운 문제 (21. 12. 09.)
 */
