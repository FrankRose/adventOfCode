const path = require('path');
const readInputFile = require('../utils/readInputFile');

const problemB = ids => {
  for (let i = 0; i < ids[0].length; i++) {
    const possibleCodes = ids
      .map(word => word.slice(0, i) + word.slice(i + 1))
      .sort();

    const match = possibleCodes.reduce((acc, curr, indx, arr) => {
      return curr === arr[indx - 1] ? curr : acc;
    }, '');

    if (match) {
      return match;
    }
  }
};

const solveProblemB = () => {
  const input = readInputFile(path.join(__dirname, 'day02Input.txt'));
  const solution = problemB(input);

  console.log(`The code is ${solution}`);
};

module.exports = problemB;
