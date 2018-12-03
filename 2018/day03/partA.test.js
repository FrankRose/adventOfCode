const problemA = require('./partA');

test('Solves sample problem', () => {
  const sampleInput = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];
  expect(problemA(sampleInput)).toBe(4);
});
