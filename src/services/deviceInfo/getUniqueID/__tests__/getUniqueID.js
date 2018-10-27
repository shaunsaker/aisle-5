import getUniqueID from '..';

jest.mock('react-native-device-info', () => {
  return {
    getUniqueID: jest.fn(() => {
      return new Promise((resolve) => {
        resolve('192.168.8.103');
      });
    }),
  };
});

describe('getUniqueID', () => {
  it('resolves a promise', async () => {
    expect.assertions(1);
    const response = await getUniqueID();
    expect(response).toEqual({ uniqueID: '192.168.8.103' });
  });
});
