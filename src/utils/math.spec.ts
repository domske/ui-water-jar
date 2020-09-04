import { clamp } from './math';

describe('clamp', () => {
  it('no limit', () => {
    expect(clamp(42)).toEqual(42);
  });

  it('limit min', () => {
    expect(clamp(42, 0)).toEqual(42);
    expect(clamp(42, 50)).toEqual(50);
  });

  it('limit max', () => {
    expect(clamp(7, undefined, 10)).toEqual(7);
    expect(clamp(42, undefined, 10)).toEqual(10);
  });

  it('limit both', () => {
    expect(clamp(42, 0, 100)).toEqual(42);
    expect(clamp(-42, 0, 100)).toEqual(0);
    expect(clamp(142, 0, 100)).toEqual(100);
    expect(clamp(-27, -10, 10)).toEqual(-10);
  });
});
