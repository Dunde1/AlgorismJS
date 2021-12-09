/**
 * 문제 : https://programmers.co.kr/learn/courses/30/lessons/17681
 */

const example = [
  { n: 5, arr1: [9, 20, 28, 18, 11], arr2: [30, 1, 21, 17, 28], result: ['#####', '# # #', '### #', '# ##', '#####'] },
  { n: 6, arr1: [46, 33, 33, 22, 31, 50], arr2: [27, 56, 19, 14, 14, 10], result: ['######', '###  #', '##  ##', ' #### ', ' #####', '### # '] },
];

example.forEach(({ n, arr1, arr2, result }, idx) => {
  console.log(`${idx} is [${solution(n, arr1, arr2)}] & result: [${result}]`);
});

function solution(n, arr1, arr2) {
  const answer = [];

  arr1 = arr1.map((v) => v.toString(2).padStart(n, '0'));
  arr2 = arr2.map((v) => v.toString(2).padStart(n, '0'));

  arr1.forEach((v, i) => {
    let x = arr2[i];
    answer[i] = '';

    for (let idx = 0; idx < n; idx++) {
      if (v[idx] === '0' && x[idx] === '0') answer[i] += ' ';
      else answer[i] += '#';
    }
  });

  return answer;
}

/**
 * 기본 응용문제 (21. 12. 09.)
 */
