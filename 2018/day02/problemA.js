/* eslint-disable complexity */

const problemA = ids => {
  let doublesCount = 0;
  let triplesCount = 0;

  ids.forEach(line => {
    const counts = {};
    const doubles = {};
    const triples = {};

    for (let i = 0; i < line.length; i++) {
      const letter = line[i];
      counts[letter] = (counts[letter] || 0) + 1;

      if (counts[letter] === 2) {
        doubles[letter] = true;
      }

      if (counts[letter] === 3) {
        delete doubles[letter];
        triples[letter] = true;
      }

      if (counts[letter] > 3 && triples[letter]) {
        delete triples[letter];
      }
    }

    doublesCount += Object.keys(doubles).length > 0 ? 1 : 0;
    triplesCount += Object.keys(triples).length > 0 ? 1 : 0;
  });

  return doublesCount * triplesCount;
};

// (input => {
//   const solution = problemA(input);
//   console.log(`The solution for problem A is ${solution}`);
// })(sampleInput);

module.exports = problemA;
