const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

const inputFile = 'day01Input.txt';

const getProblemInput = () => {
  try {
    const fileContents = fs.readFileSync(
      path.join(__dirname, inputFile),
      'utf8'
    );
    return fileContents.split('\n');
  } catch (error) {
    console.error(chalk`{red.bold ${error.message}}`);
    console.error(error.stack);
  }
};

module.exports = getProblemInput;
