/**
 * 문제 : https://level.goorm.io/exam/43250/%EB%B0%B0%EC%97%B4-%ED%95%A9%EC%B9%98%EA%B8%B0/quiz/1
 */

function sumList(one, two) {
  const result = [];

  while (one.length + two.length !== 0) {
    if (one.length === 0) result.push(two.shift());
    else if (two.length === 0) result.push(one.shift());
    else {
      if (one[0] > two[0]) result.push(two.shift());
      else result.push(one.shift());
    }
  }

  return result;
}

/**
 * 문제 제출 유형에 맞춰 출력하도록 하자. (21. 12. 16.)
 */
