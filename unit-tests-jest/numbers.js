/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers) {
  return numbers.filter((n) => (n % 2 === 0)
  );
}

/**
 * Returns a number formatted in dollars and cents.
 * If not a number returns NaN.
 * If a decimal or negative number returns undefined.
 */
export function toDollars(amount) {
  if (isNaN(amount)) return NaN;
  if (!Number.isInteger(amount) || !isFinite(amount) || amount < 0) return undefined;
  return `$${amount}.00`;
}

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 * @param {Array} numbers The array of numbers to be divided by the divisor.
 * @param {number} divisor The number to divide into each element of `numbers`.
 * @returns a new array.
 */
export function divideBy(numbers, divisor) {
  if (!isFinite(divisor) || divisor === 0) return undefined;
  const newArray = numbers.slice(0);
  for (let i = 0; i < newArray.length; i++) {
    if (isNaN(newArray[i])) return undefined;
    newArray[i] = newArray[i] / divisor;
  }
  return newArray;
}

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 * @param {Object} obj The object to modify.
 * @param {number} multiplier The number to multiply by.
 * @returns the input object.
 */
export function multiplyBy(obj, multiplier) {
  if (isNaN(multiplier)) return undefined;

  Object.entries(obj).forEach(([key, value]) => {
    if (isNaN(value)) {
      obj[key] = value;
    } else {
      obj[key] = value * multiplier;
    }
  });
  return obj;
}
