const { doMathThings } = require('./calculate');

describe('doMathThings', () => {
  test('returns sum when a == b', () => {
    expect(doMathThings(3, 3)).toBe(6);
  });

  test('returns product when a != b', () => {
    expect(doMathThings(2, 3)).toBe(6);
  });
});