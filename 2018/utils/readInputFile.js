const chalk = require('chalk');
const fs = require('fs');

const readInputFile = filename => {
  try {
    const filecontent = fs.readFileSync(filename, 'utf8');
    return filecontent.split('\n');
  } catch (err) {
    console.error(chalk`{red.bold ${err.message}}`);
    console.error(err.stack);
  }
};

module.exports = readInputFile;
