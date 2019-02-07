import { cons } from 'hexlet-pairs';
import { startOfRange, endOfRange } from '../engine/settings';
import getRandomNumInRange from '../modules/gerRandomNumInRange';
import isEven from '../modules/isEven';
import makeGame from '../engine/index';

const greeting = 'Answer "yes" if number even otherwise answer "no"\n';

const condition = () => {
  const question = getRandomNumInRange(startOfRange, endOfRange);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);
