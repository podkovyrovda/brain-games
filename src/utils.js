export const getRandomNumInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const isEven = x => (x % 2 === 0);