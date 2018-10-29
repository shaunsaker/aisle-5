import getColor from '..';

describe('getColor()', () => {
  it('should work', () => {
    expect(getColor(1)).toEqual('hsl(0,67%,50%)');
    expect(getColor(0)).toEqual('hsl(120,67%,50%)');
    expect(getColor(0.5)).toEqual('hsl(60,67%,50%)');
  });
});
