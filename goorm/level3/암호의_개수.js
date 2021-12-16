/**
 * 문제 : https://level.goorm.io/exam/43168/%EC%95%94%ED%98%B8%EC%9D%98-%EA%B0%9C%EC%88%98/quiz/1
 */

function calc(a, b, n) {
  let result = 0;

  for (let i = a; i <= b; i++) {
    result += n ** i;
  }

  return result;
}

/**
 * 레벨 3 문제가 아닌듯. (21. 12. 17.)
 */
