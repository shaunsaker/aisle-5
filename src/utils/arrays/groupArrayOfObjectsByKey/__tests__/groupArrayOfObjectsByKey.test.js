import groupArrayOfObjectsByKey from '..';

describe('groupArrayOfObjectsByKey()', () => {
  it('should work', () => {
    const array = [
      {
        foo: 'bar',
      },
      {
        foo: 'bar',
      },
    ];
    const expected = { bar: [{ foo: 'bar' }, { foo: 'bar' }] };

    expect(groupArrayOfObjectsByKey(array, 'foo')).toEqual(expected);
  });
});
