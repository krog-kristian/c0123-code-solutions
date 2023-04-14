import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {

    const stringCheck = [NaN];
    expect(evenNumbers(stringCheck)).toEqual([]);

    const numbers = [1, 4, 5, 10, 0];
    expect(evenNumbers(numbers)).toEqual([4, 10, 0]);

    const numbers2 = [-1, 2, 3, 100];
    expect(evenNumbers(numbers2)).toEqual([2, 100]);

    const numbers3 = [-Infinity, -100, 10, 50, Infinity];
    expect(evenNumbers(numbers3)).toEqual([-100, 10, 50]);

  });
});

describe('toDollars(amount)', () => {
  it('returns a number as dollar value', () => {
    const numbers = 1543;
    const result = toDollars(numbers);
    expect(result).toEqual(15.43);
  });
});

describe('divideBy(numbers, divisor)', () => {
  it('returns a number as dollar value', () => {
    const numbers = [9, 6];
    const divisor = 3;
    expect(divideBy(numbers, divisor)).toEqual([3, 2]);
  });
});

describe('multiplyBy(obj, multiplier)', () => {
  it('returns a number as dollar value', () => {
    const numbers = [9, 6];
    const multiplier = 3;
    expect(multiplyBy(numbers, multiplier)).toEqual([3, 2]);
  });
});
