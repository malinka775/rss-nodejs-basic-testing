// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const ARRAY_A = [-1000, -157, -39, -3, 0, 8, 89, 100, 1290];
const ARRAY_B = [-1111, -200, -25, -9, 0, 10, 199, 1389];
const INVALID_ARGS = [
  'ahj',
  '245',
  { number: 2 },
  () => {
    return;
  },
  [1],
];

const ARRAY_VALID_ACTIONS = Object.values(Action);
const ARRAY_INVALID_ACTIONS = ['++', '=', 'str', ')', '('];

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    ARRAY_A.forEach((a) => {
      ARRAY_B.forEach((b) => {
        const result = simpleCalculator({ a, b, action: Action.Add });
        expect(result).toBe(a + b);
      });
    });
  });

  test('should subtract two numbers', () => {
    ARRAY_A.forEach((a) => {
      ARRAY_B.forEach((b) => {
        const result = simpleCalculator({ a, b, action: Action.Subtract });
        expect(result).toBe(a - b);
      });
    });
  });

  test('should multiply two numbers', () => {
    ARRAY_A.forEach((a) => {
      ARRAY_B.forEach((b) => {
        const result = simpleCalculator({ a, b, action: Action.Multiply });
        expect(result).toBe(a * b);
      });
    });
  });

  test('should divide two numbers', () => {
    ARRAY_A.forEach((a) => {
      ARRAY_B.forEach((b) => {
        const result = simpleCalculator({ a, b, action: Action.Divide });
        expect(result).toBe(a / b);
      });
    });
  });

  test('should exponentiate two numbers', () => {
    ARRAY_A.forEach((a) => {
      ARRAY_B.forEach((b) => {
        const result = simpleCalculator({ a, b, action: Action.Exponentiate });
        expect(result).toBe(a ** b);
      });
    });
  });

  test('should return null for invalid action', () => {
    ARRAY_A.forEach((a) => {
      ARRAY_B.forEach((b) => {
        ARRAY_INVALID_ACTIONS.forEach((action) => {
          const result = simpleCalculator({ a, b, action });
          expect(result).toBeNull;
        });
      });
    });
  });

  test('should return null for invalid arguments', () => {
    INVALID_ARGS.forEach((a) => {
      ARRAY_B.forEach((b) => {
        ARRAY_VALID_ACTIONS.forEach((action) => {
          const result = simpleCalculator({ a, b, action });
          expect(result).toBeNull;
        });
      });
    });
  });
});
