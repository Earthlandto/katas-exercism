const isDivisible = (numerator, divisor) => numerator % divisor === 0;

export const isLeap = (year) => {
  if (!isDivisible(year, 4)) {
    return false;
  }

  if (isDivisible(year, 100)) {
    return false;
  }

  return true;
};
