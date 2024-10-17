// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

const ERROR_DEFAULT_MSG = 'Oops!';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    await expect(resolveValue(3)).resolves.toBe(3);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('test')).toThrow('test');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(throwError).toThrow(ERROR_DEFAULT_MSG);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(throwCustomError).toThrowError(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    async () => {
      const error = await rejectCustomError();
      expect(error).toBeInstanceOf(MyAwesomeError);
    };
  });
});
