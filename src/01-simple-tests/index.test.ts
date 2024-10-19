// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result1 = simpleCalculator({ a: 1, b: 2, action: Action.Add });
    expect(result1).toBe(3);

    const result2 = simpleCalculator({ a: 2, b: 2, action: Action.Add });
    expect(result2).toBe(4);

    const result3 = simpleCalculator({ a: 3, b: -2, action: Action.Add });
    expect(result3).toBe(1);
  });

  test('should subtract two numbers', () => {
    const result1 = simpleCalculator({ a: 10, b: 34, action: Action.Subtract });
    const result2 = simpleCalculator({ a: 1, b: 1, action: Action.Subtract });
    const result3 = simpleCalculator({
      a: 97,
      b: -10,
      action: Action.Subtract,
    });

    expect(result1).toBe(-24);
    expect(result2).toBe(0);
    expect(result3).toBe(107);
  });

  test('should multiply two numbers', () => {
    const result1 = simpleCalculator({ a: 10, b: 34, action: Action.Multiply });
    const result2 = simpleCalculator({ a: 10, b: 0, action: Action.Multiply });
    const result3 = simpleCalculator({ a: -5, b: 34, action: Action.Multiply });

    expect(result1).toBe(340);
    expect(result2).toBe(0);
    expect(result3).toBe(-170);
  });

  test('should divide two numbers', () => {
    const result1 = simpleCalculator({ a: 9, b: 3, action: Action.Divide });
    const result2 = simpleCalculator({ a: 0, b: 99, action: Action.Divide });
    const result3 = simpleCalculator({ a: 140, b: -10, action: Action.Divide });

    expect(result1).toBe(3);
    expect(result2).toBe(0);
    expect(result3).toBe(-14);
  });

  test('should exponentiate two numbers', () => {
    const result1 = simpleCalculator({
      a: 0,
      b: 99,
      action: Action.Exponentiate,
    });
    const result2 = simpleCalculator({
      a: 1,
      b: 99,
      action: Action.Exponentiate,
    });
    const result3 = simpleCalculator({
      a: 5,
      b: 2,
      action: Action.Exponentiate,
    });
    const result4 = simpleCalculator({
      a: 2,
      b: -1,
      action: Action.Exponentiate,
    });
    const result5 = simpleCalculator({
      a: 2,
      b: -2,
      action: Action.Exponentiate,
    });

    expect(result1).toBe(0);
    expect(result2).toBe(1);
    expect(result3).toBe(25);
    expect(result4).toBe(0.5);
    expect(result5).toBe(0.25);
  });

  test('should return null for invalid action', () => {
    const result1 = simpleCalculator({ a: 3, b: -2, action: '//' });
    const result2 = simpleCalculator({ a: 5, b: 2, action: '=' });
    const result3 = simpleCalculator({ a: 5, b: 2, action: null });
    const result4 = simpleCalculator({ a: 5, b: 2, action: ']' });

    expect(result1).toBe(null);
    expect(result2).toBe(null);
    expect(result3).toBe(null);
    expect(result4).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const inputs = [
      { a: null, b: 2, action: Action.Add },
      { a: '5', b: 2, action: Action.Add },
      { a: null, b: 2, action: Action.Subtract },
      { a: '', b: null, action: Action.Subtract },
      { a: null, b: null, action: Action.Multiply },
      { a: '5', b: '2', action: Action.Multiply },
      { a: null, b: 2, action: Action.Divide },
      { a: '5', b: '2', action: Action.Divide },
      { a: null, b: 2, action: Action.Exponentiate },
      { a: '5', b: '2', action: Action.Exponentiate },
    ];

    inputs.forEach((input) => {
      expect(simpleCalculator(input)).toBe(null);
    });
  });
});
