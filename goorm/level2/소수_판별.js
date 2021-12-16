/**
 * 문제 : https://level.goorm.io/exam/43238/%EC%86%8C%EC%88%98-%ED%8C%90%EB%B3%84/quiz/1
 */

function isPrime(number) {
  if (number < 2) return false;
  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let i = 3; i * i <= number; i += 2) if (number % i === 0) return false;

  return true;
}

/**
 * 소수판별 기본문제 (21. 12. 16.)
 */
