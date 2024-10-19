// Uncomment the code below and write your tests
import {
  BankAccount,
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
  TransferFailedError,
} from '.';

import { random } from 'lodash';

jest.mock('lodash', () => ({
  random: jest.fn(),
}));

describe('BankAccount', () => {
  let testAccount: BankAccount;
  beforeEach(() => {
    testAccount = getBankAccount(50);
  });
  test('should create account with initial balance', () => {
    expect(testAccount.getBalance()).toBe(50);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => testAccount.withdraw(200)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const testDestinationAccount = getBankAccount(0);
    expect(() => testAccount.transfer(100, testDestinationAccount)).toThrow(
      InsufficientFundsError,
    );
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => testAccount.transfer(100, testAccount)).toThrow(
      TransferFailedError,
    );
  });

  test('should deposit money', () => {
    testAccount.deposit(10);
    expect(testAccount.getBalance()).toBe(60);
  });

  test('should withdraw money', () => {
    testAccount.withdraw(10);
    expect(testAccount.getBalance()).toBe(40);
  });

  test('should transfer money', () => {
    const testDestinationAccount = getBankAccount(0);
    testAccount.transfer(10, testDestinationAccount);
    expect(testAccount.getBalance()).toBe(40);
    expect(testDestinationAccount.getBalance()).toBe(10);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    (random as jest.Mock).mockReturnValueOnce(42).mockReturnValueOnce(1); // запрос баланса вернет 42, запрос должен быть удачным
    const testBalance = await testAccount.fetchBalance();
    expect(testBalance).toBe(42);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    (random as jest.Mock).mockReturnValueOnce(100500).mockReturnValueOnce(1); // запрос баланса вернет 100500, запрос будет удачным
    await testAccount.synchronizeBalance();
    expect(testAccount.getBalance()).toBe(100500);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    (random as jest.Mock).mockReturnValueOnce(10).mockReturnValueOnce(0); // запрос баланса вернет 10, запрос будет неудачным
    await expect(testAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
