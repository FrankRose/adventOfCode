const problemB = require('./problemB');

test('solves sample problem', () => {
  const sampleInput = [
    'abcde',
    'fghij',
    'klmno',
    'fglip',
    'pqrst',
    'fguij',
    'axcye',
    'wvxyz',
  ];
  expect(problemB(sampleInput)).toBe('fgij');
});
