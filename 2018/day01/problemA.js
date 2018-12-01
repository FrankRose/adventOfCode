/* eslint-disable no-return-assign */

const getInputData = require('./util');

const problemA = frequencies => {
  return frequencies.map(str => +str).reduce((acc, curr) => (acc += curr), 0);
};

const solveProblemA = () => {
  const frequencies = getInputData();
  const solution = problemA(frequencies);

  console.log(`The solution to problem A is: ${solution}`);
};

console.log(solveProblemA());

module.exports = problemA;
