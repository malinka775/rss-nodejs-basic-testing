// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: null, b: 2, action: Action.Add, expected: null },
  { a: '5', b: 2, action: Action.Add, expected: null },
  { a: 10, b: 34, action: Action.Subtract, expected: -24 },
  { a: 1, b: 1, action: Action.Subtract, expected: 0 },
  { a: 97, b: -10, action: Action.Subtract, expected: 107 },
  { a: null, b: 2, action: Action.Subtract, expected: null },
  { a: '5', b: 2, action: Action.Subtract, expected: null },
  { a: 10, b: 34, action: Action.Multiply, expected: 340 },
  { a: 10, b: 0, action: Action.Multiply, expected: 0 },
  { a: -5, b: 34, action: Action.Multiply, expected: -170 },
  { a: null, b: 2, action: Action.Multiply, expected: null },
  { a: '5', b: '2', action: Action.Multiply, expected: null },
  { a: 9, b: 3, action: Action.Divide, expected: 3 },
  { a: 0, b: 99, action: Action.Divide, expected: 0 },
  { a: 140, b: -10, action: Action.Divide, expected: -14 },
  { a: null, b: 2, action: Action.Divide, expected: null },
  { a: '5', b: '2', action: Action.Divide, expected: null },
  { a: 0, b: 99, action: Action.Exponentiate, expected: 0 },
  { a: 1, b: 99, action: Action.Exponentiate, expected: 1 },
  { a: 5, b: 2, action: Action.Exponentiate, expected: 25 },
  { a: 2, b: -1, action: Action.Exponentiate, expected: 0.5 },
  { a: 2, b: -2, action: Action.Exponentiate, expected: 0.25 },
  { a: null, b: 2, action: Action.Exponentiate, expected: null },
  { a: '5', b: '2', action: Action.Exponentiate, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)('%#: "%s"', ({ a, b, action, expected }) => {
    expect(simpleCalculator({ a, b, action })).toBe(expected);
  });
});
