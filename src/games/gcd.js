import { cons } from 'hexlet-pairs';
import getRandomNumInRange from '../utils';
import makeGame from '../engine';

const greeting = 'Find the greatest common divisor of given numbers';

const startOfRange = 1;
const endOfRange = 100;

const findGcd = (a, b) => {
  if (a === b) {
    return a;
  } if (a > b) {
    return findGcd(a - b, b);
  }
  return findGcd(a, b - a);
};

const condition = () => {
  const firstNum = getRandomNumInRange(startOfRange, endOfRange);
  const secondNum = getRandomNumInRange(startOfRange, endOfRange);

  const correctAnswer = findGcd(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;

  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);
