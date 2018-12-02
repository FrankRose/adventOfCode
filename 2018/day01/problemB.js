const getInputData = require('./util');

const problemB = frequencies => {
  let current = 0;
  const resultFrequencies = {
    [current]: true,
  };

  let i = 0;
  let found = false;

  while (!found) {
    current += +frequencies[i++ % frequencies.length];

    if (resultFrequencies[current]) {
      found = true;
      return current;
    }

    resultFrequencies[current] = true;
  }
};

const solveProblemB = () => {
  const frequencies = getInputData();
  const solution = problemB(frequencies);

  console.log(`The solution to day 01 problem B is ${solution}`);
};

solveProblemB();

module.exports = problemB;
