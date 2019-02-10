import { cons } from 'hexlet-pairs';
import getRandomNumInRange from '../utils';
import makeGame from '../engine';

const greeting = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const startOfRange = 1;
const endOfRange = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const condition = () => {
  const question = getRandomNumInRange(startOfRange, endOfRange);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);
