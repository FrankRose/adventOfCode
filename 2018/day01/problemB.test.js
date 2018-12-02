const problemB = require('./problemB');

test('solves problem in description ([+1, -2, +3, +1, +1, -2])', () => {
  const frequencies = ['+1', '-2', '+3', '+1', '+1', '-2'];
  expect(problemB(frequencies)).toBe(2);
});

test('solves sample problem #1 ([-1, +1]) ', () => {
  const frequencies = ['+1', '-1'];
  expect(problemB(frequencies)).toBe(0);
});

test('solves sample problem #2 ([+3, +3, +4, -2, -4])', () => {
  const frequencies = ['+3', '+3', '+4', '-2', '-4'];
  expect(problemB(frequencies)).toBe(10);
});

test('solves sample problem #3', () => {
  const frequencies = ['-6', '+3', '+8', '+5', '-6'];
  expect(problemB(frequencies)).toBe(5);
});

test('solves sample problem #4', () => {
  const frequencies = ['+7', '+7', '-2', '-7', '-4'];
  expect(problemB(frequencies)).toBe(14);
});
