/**
 * 문제 : https://programmers.co.kr/learn/courses/30/lessons/81302
 */

const example = [
  {
    places: [
      ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
      ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
      ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
      ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
      ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
    ],
    result: [1, 0, 1, 1, 1],
  },
];

console.log(solution(example[0].places));

function solution(places) {
  const answer = [];
  places.forEach((place) => {
    answer.push(placeCheck(place) ? 1 : 0);
  });
  return answer;
}

function placeCheck(place) {
  let result = true;

  place.forEach((line, y) => {
    if (!result) return;
    for (let x = 0; x < line.length; x++) {
      if (place[y][x] === 'P' && !lineCheck([y, x], place)) {
        result = false;
        break;
      }
    }
  });

  return result;
}

function lineCheck(person, place) {
  const [y, x] = person;
  const checkY = { '-1': place[y - 1] !== undefined, 1: place[y + 1] !== undefined, 2: place[y + 2] !== undefined };

  if ((checkY['1'] && place[y + 1][x] === 'P') || place[y][x + 1] === 'P') return false;
  if (checkY['2'] && place[y + 2][x] === 'P' && place[y + 1][x] === 'O') return false;
  if (place[y][x + 2] === 'P' && place[y][x + 1] === 'O') return false;
  if (checkY['-1'] && place[y - 1][x + 1] === 'P' && ((checkY['-1'] && place[y - 1][x] === 'O') || place[y][x + 1] === 'O')) return false;
  if (checkY['1'] && place[y + 1][x + 1] === 'P' && ((checkY['1'] && place[y + 1][x] === 'O') || place[y][x + 1] === 'O')) return false;

  return true;
}

/**
 * 구현문제는 시간이 오래걸린다! (21. 12. 15.)
 */
