import { ascending } from './ascending';

describe('Is strictly ascending', () => {
  test('[1, 3, 2] is true', () => {
    expect(ascending([1,3,2])).toEqual(true);
  });
  test('[1, 2, 3] is false', () => {
    expect(ascending([1,2,3])).toEqual(false);
  });
  test('[1, 3, 5, 6, 4, 2] is true', () => {
    expect(ascending([1, 3, 5, 6, 4, 2])).toEqual(true);
  });
  test('[1, 3, 6, 5, 4, 2] is false', () => {
    expect(ascending([1, 3, 6, 5, 4, 2])).toEqual(false);
  });
});
