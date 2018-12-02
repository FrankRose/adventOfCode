/* eslint-disable no-return-assign */

const getInputData = require('./util');

const problemA = frequencies => {
  return frequencies.map(str => +str).reduce((acc, curr) => (acc += curr), 0);
};

const solveProblemA = () => {
  const frequencies = getInputData();
  const solution = problemA(frequencies);

  console.log(`The solution to day 01 problem A is: ${solution}`);
};

solveProblemA();

module.exports = problemA;
