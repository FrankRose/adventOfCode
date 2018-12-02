/* eslint-disable no-return-assign */
const path = require('path');
const readInputFile = require('../utils/readInputFile');

const problemA = ids => {
  let doublesCount = 0;
  let triplesCount = 0;

  ids.forEach(line => {
    const counts = {};
    const doubles = {};
    const triples = {};

    const countFunctions = {
      2: letter => (doubles[letter] = true),
      3: letter => {
        triples[letter] = true;
        delete doubles[letter];
      },
      4: letter => {
        triples[letter] && delete triples[letter];
      },
    };

    for (let i = 0; i < line.length; i++) {
      const letter = line[i];
      counts[letter] = (counts[letter] || 0) + 1;

      if (countFunctions[counts[letter]]) {
        countFunctions[counts[letter]](letter);
      }
    }

    doublesCount += Object.keys(doubles).length > 0 ? 1 : 0;
    triplesCount += Object.keys(triples).length > 0 ? 1 : 0;
  });

  return doublesCount * triplesCount;
};

// const codes = readInputFile(path.join(__dirname, 'day02Input.txt'));

// (input => {
//   const solution = problemA(input);
//   console.log(`The solution for problem A is ${solution}`);
// })(codes);

module.exports = problemA;
