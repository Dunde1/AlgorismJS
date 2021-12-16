/**
 * 문제 : https://level.goorm.io/exam/43064/binary-search/quiz/1
 */

console.log(binarySearch([1, 5, 7, 9, 10], 9));

function binarySearch(list, num) {
  let [left, mid, right] = [0, Math.floor((list.length - 1) / 2), list.length - 1];

  while (left < right) {
    if (list[mid] > num) right = mid;
    else left = mid + 1;

    mid = Math.floor((right + left) / 2);
  }

  if (list[left - 1] === num) return left;
  else return 'X';
}

/**
 * 초과시 정지, 내림은 left + 1 후 결과는 left - 1 (21. 12. 16.)
 */
