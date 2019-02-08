import { cons } from 'hexlet-pairs';
import { getRandomNumInRange, findGcd } from '../utils';
import makeGame from '../engine';

const greeting = 'Find the greatest common divisor of given numbers\n';

const condition = () => {
  const startOfRange = 1;
  const endOfRange = 100;
  const firstNum = getRandomNumInRange(startOfRange, endOfRange);
  const secondNum = getRandomNumInRange(startOfRange, endOfRange);

  const correctAnswer = findGcd(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;

  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);
