const getProblemInput = require('./util');

const problemB = frequencies => {
  let currentFrequency = 0;
  const resultFrequencies = {
    0: true,
  };

  let i = 0;
  let found = false;
  let result;

  while (!found) {
    currentFrequency += +frequencies[i++ % frequencies.length];

    if (resultFrequencies[currentFrequency]) {
      result = currentFrequency;
      found = true;
      return result;
    }

    resultFrequencies[currentFrequency] = true;
  }
};

console.log('The value returned is:', problemB(['+1', '-1']));

module.exports = problemB;
