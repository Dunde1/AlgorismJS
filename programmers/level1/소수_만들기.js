/**
 * 문제 : https://programmers.co.kr/learn/courses/30/lessons/12977
 */

const example = [
  { nums: [1, 2, 3, 4], result: 1 },
  { nums: [1, 2, 7, 6, 4], result: 4 },
];

example.forEach(({ nums, result }, idx) => {
  console.log(`${idx} is ${solution(nums) === result ? 'pass' : `fail ${solution(nums)}`}`);
});

function solution(nums) {
  let answer = 0;

  const isPrime = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i * i <= num; i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }

  return answer;
}

/**
 * 단순 무식한 방법이 최고! (21. 12. 08.)
 */
