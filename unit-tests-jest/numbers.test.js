import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('checks for NaN value', () => {

    const stringCheck = [NaN, 'the'];
    expect(evenNumbers(stringCheck)).toEqual([]);
  });

  it(' returns even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    expect(evenNumbers(numbers)).toEqual([4, 10, 0]);

    const numbers2 = [-1, 2, 3, 100];
    expect(evenNumbers(numbers2)).toEqual([2, 100]);

    const numbers3 = [-Infinity, -100, 10, 50, Infinity];
    expect(evenNumbers(numbers3)).toEqual([-100, 10, 50]);
  });
});

describe('toDollars(amount)', () => {
  it('rejects NaN values', () => {
    const value = 'the';
    const result = toDollars(value);
    expect(result).toEqual(NaN);
  });

  it('only takes integers', () => {
    const decimal = 15.25;
    const result = toDollars(decimal);
    expect(result).toEqual(undefined);

    const result2 = toDollars(Infinity);
    expect(result2).toEqual(undefined);
  });

  it('only takes positive integers', () => {
    const negative = -215;
    const result = toDollars(negative);
    expect(result).toEqual(undefined);
  });

  it('returns a number as dollar value', () => {
    const numbers = 1543;
    const result = toDollars(numbers);
    expect(result).toEqual('$1543.00');
  });
});

describe('divideBy(numbers, divisor)', () => {
  it('returns undefined if any values are NaN', () => {
    const numbers = [9, 'the', 6];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual(undefined);
  });

  it('returns undefined is the divisor is not a valid divisor', () => {
    const numbers = [12, 9, 6];
    const divisor = 0;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual(undefined);
  });

  it('returns the original array', () => {
    const numbers = [9, 6];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([3, 2]);
    expect(numbers).toEqual([9, 6]);
  });

  it('returns a new array with numbers divided', () => {
    const numbers = [9, 6];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([3, 2]);
  });
});

describe('multiplyBy(obj, multiplier)', () => {
  it('returns undefined if multiplier is NaN', () => {
    const numbers = {
      a: 1,
      b: 2,
      c: 3
    };
    const multiplier = 'the';
    const result = multiplyBy(numbers, multiplier);
    expect(result).toEqual(undefined);
  });

  it('modifies the input object', () => {
    const numbers = {
      a: 1,
      b: 2,
      c: 3
    };
    const multiplier = 2;
    const result = multiplyBy(numbers, multiplier);
    expect(result).toEqual({
      a: 2,
      b: 4,
      c: 6
    });
    expect(numbers).toEqual({
      a: 2,
      b: 4,
      c: 6
    });
  });

  it('only multiplies values that are numbers', () => {
    const numbers = {
      a: 1,
      b: 2,
      c: 3,
      d: 'the'
    };
    const multiplier = 2;
    const result = multiplyBy(numbers, multiplier);
    expect(result).toEqual({
      a: 2,
      b: 4,
      c: 6,
      d: 'the'
    });
  });

  it('multiples numbers in an object', () => {
    const numbers = {
      a: 1,
      b: 2,
      c: 3
    };
    const multiplier = 2;
    const result = multiplyBy(numbers, multiplier);
    expect(result).toEqual({
      a: 2,
      b: 4,
      c: 6
    });
  });
});
