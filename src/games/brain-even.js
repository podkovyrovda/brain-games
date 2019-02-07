import { cons } from 'hexlet-pairs';
import { getRandomNumInRange, isEven } from '../utils';
import makeGame from '../engine';

const greeting = 'Answer "yes" if number even otherwise answer "no"\n';

const condition = () => {
  const startOfRange = 3;
  const endOfRange = 856;
  const question = getRandomNumInRange(startOfRange, endOfRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);
