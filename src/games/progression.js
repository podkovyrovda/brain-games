import { cons, car, cdr } from 'hexlet-pairs';
import getRandomNumInRange from '../utils';
import makeGame from '../engine';

const greeting = 'What number is missing in the progression';

const startOfRange = 1;
const endOfRange = 10;
const elementsInProg = 10;

const getProgression = (startOfProg, stepOfProg, missingNumPosition) => {
  let strOfProg = '';

  for (let i = 0; i < elementsInProg; i += 1) {
    strOfProg += (i === missingNumPosition) ? '.. ' : `${startOfProg + stepOfProg * i} `;
  }

  return strOfProg.trim();
};

const condition = () => {
  const startOfProg = getRandomNumInRange(startOfRange, endOfRange);
  const stepOfProg = getRandomNumInRange(startOfRange, endOfRange);
  const missingNumPosition = getRandomNumInRange(0, elementsInProg - 1);

  const question = getProgression(startOfProg, stepOfProg, missingNumPosition);
  const correctAnswer = String(startOfProg + missingNumPosition * stepOfProg);

  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);
