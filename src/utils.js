export const getRandomNumInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isEven = x => (x % 2 === 0);

export const findGcd = (a, b) => {
  if (a === b) {
    return a;
  } if (a > b) {
    return findGcd(a - b, b);
  }
  return findGcd(a, b - a);
};
