/* eslint-disable no-return-assign */
const path = require('path');
const readInputFile = require('../utils/readInputFile');

const problemA = ids => {
  let doublesCount = 0;
  let triplesCount = 0;

  ids.forEach(line => {
    const counts = {};
    for (let i = 0; i < line.length; i++) {
      const letter = line[i];
      counts[letter] = (counts[letter] || 0) + 1;
    }

    //  Casting a boolean to a number (true === 1 / false === 0)
    doublesCount += +Object.values(counts).some(count => count === 2);
    triplesCount += +Object.values(counts).some(count => count === 3);
  });

  return doublesCount * triplesCount;
};

const codes = readInputFile(path.join(__dirname, 'day02Input.txt'));

(input => {
  const solution = problemA(input);
  console.log(`The solution for problem A is ${solution}`);
})(codes);

module.exports = problemA;
