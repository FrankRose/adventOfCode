const problemA = require('./problemA');

test('correctly solves sample problem #1', () => {
  expect(problemA(['+1', '+1', '+1'])).toBe(3);
});

test('correctly solves sample problem #2', () => {
  expect(problemA(['+1', '+1', '-2'])).toBe(0);
});

test('correctly solves sample problem #3 ([-1, -2, -3])', () => {
  expect(problemA(['-1', '-2', '-3'])).toBe(-6);
});
