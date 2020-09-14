const readInputFile = require('../utils/readInputFile');
const path = require('path');

const input = readInputFile(path.join(__dirname, 'day03Input.txt')).join('\n');
// console.log(input);

let matches;
let regex = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/;

let tiles = {};
let numOverlapTiles = 0;
let claims = input.split('\n').map(line => {
  matches = regex.exec(line);
  return {
    id: +matches[1],
    x: +matches[2],
    y: +matches[3],
    w: +matches[4],
    h: +matches[5],
  };
});

claims.forEach(rect => {
  for (let x = +rect.x; x < +rect.x + +rect.w; ++x) {
    for (let y = +rect.y; y < +rect.y + +rect.h; ++y) {
      tiles[`${x},${y}`] = (tiles[`${x},${y}`] || 0) + 1;
    }
  }
});

for (let tile of Object.values(tiles)) {
  if (tile > 1) ++numOverlapTiles;
}
let result = [, ,];
result[0] = numOverlapTiles;
console.log(result[0]);

const overlap = (a, b) =>
  a.x < b.x + b.w && a.y < b.y + b.h && b.x < a.x + a.w && b.y < a.y + a.h;

let findLoneClaimID = () => {
  for (let a = 0; a < claims.length; ++a) {
    let loneClaim = true;
    for (let b = 0; b < claims.length; ++b) {
      if (a === b) continue;
      if (overlap(claims[a], claims[b])) {
        loneClaim = false;
        break;
      }
    }

    if (loneClaim) return claims[a].id;
  }
};

console.log(findLoneClaimID());
