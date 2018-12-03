const path = require('path');
const readInputFile = require('../utils/readInputFile');

const getRectangles = () => {
  const input = readInputFile(path.join(__dirname, 'day03Input.txt'));

  return input.map(line => {
    let [id, x, y, dimensions] = line
      .split(/\W/g)
      .filter(str => str.length > 0);

    [id, x, y] = [id, x, y].map(el => +el);

    const [width, height] = dimensions.split('x').map(dims => +dims);

    return {
      id,
      x,
      y,
      width,
      height,
    };
  });
};

const problemA = input => {
  const grid = {};
  const rectangles = getRectangles();

  rectangles.forEach(rect => {
    const xCoords = Array.from({ length: rect.width }, (_, i) => i + rect.x);
    const yCoords = Array.from({ length: rect.height }, (_, i) => i + rect.y);
    const rectCoords = xCoords.map(xCoord => {
      return yCoords.map(yCoord => {
        return `${xCoord},${yCoord}`;
      });
    });

    rectCoords.forEach(arr => {
      arr.forEach(xyCoord => {
        grid[xyCoord] = (grid[xyCoord] || 0) + 1;
      });
    });
  });

  return Object.values(grid).filter(count => count > 1).length;
};

console.log(problemA(getRectangles()));

module.exports = problemA;
