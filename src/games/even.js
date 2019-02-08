import { cons } from 'hexlet-pairs';
import getRandomNumInRange from '../utils';
import makeGame from '../engine';

const greeting = 'Answer "yes" if number even otherwise answer "no"';

const startOfRange = 3;
const endOfRange = 856;

const isEven = x => (x % 2 === 0);

const condition = () => {
  const question = getRandomNumInRange(startOfRange, endOfRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);
