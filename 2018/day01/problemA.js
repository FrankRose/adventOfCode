/* eslint-disable no-return-assign */

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const getFrequencies = () => {
  let inputFile = '';
  try {
    inputFile = fs.readFileSync(path.join(__dirname, 'day01Input.txt'), 'utf8');
  } catch (err) {
    console.log(chalk`{red.bold ${err.message}}`);
    console.log(err.stack);
  }

  const frequencies = inputFile.split('\n');
  return frequencies;
};

const problemA = frequencies => {
  return frequencies.map(str => +str).reduce((acc, curr) => (acc += curr), 0);
};

module.exports = { getFrequencies, problemA };
