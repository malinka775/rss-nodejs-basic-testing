// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('lodash', () => {
  const originalModule = jest.requireActual('lodash');

  return {
    __esModule: true,
    ...originalModule,
    throttle: jest.fn((v) => v),
  };
});

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const relativeURL = '/test-url';
  const data = 'Mocked data';

  beforeEach(() => {
    (axios.create as jest.Mock).mockReturnValue({
      get: jest.fn().mockResolvedValue({ data }),
    });
  });

  test('should create instance with provided base url', async () => {
    await throttledGetDataFromApi(relativeURL);

    expect(axios.create).toBeCalledTimes(1);
    expect(axios.create).toBeCalledWith({
      baseURL,
    });
  });

  test('should perform request to correct provided url', async () => {
    await throttledGetDataFromApi(relativeURL);

    expect(axios.create().get).toBeCalledWith(relativeURL);
  });

  test('should return response data', async () => {
    const result = await throttledGetDataFromApi(relativeURL);

    expect(result).toBe(data);
  });
});
