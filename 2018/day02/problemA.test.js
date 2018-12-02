const problemA = require('./problemA');

test('solves sample problem', () => {
  const sampleInput = [
    'abcdef',
    'bababc',
    'abbcde',
    'abcccd',
    'aabcdd',
    'abcdee',
    'ababab',
  ];
  expect(problemA(sampleInput)).toBe(12);
});
