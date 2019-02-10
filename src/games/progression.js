import { cons, car, cdr } from 'hexlet-pairs';
import getRandomNumInRange from '../utils';
import makeGame from '../engine';

const greeting = 'What number is missing in the progression';

const startOfRange = 1;
const endOfRange = 10;
const elementsInProg = 10;

const getProgression = () => {
  const startOfProg = getRandomNumInRange(startOfRange, endOfRange);
  const stepOfProg = getRandomNumInRange(startOfRange, endOfRange);

  const missingNumPosition = getRandomNumInRange(0, elementsInProg - 1);

  let numInProg = 0;
  let strOfProg = '';
  let missingNum = 0;

  for (let i = 0; i < elementsInProg; i += 1) {
    if (i === missingNumPosition) {
      missingNum = numInProg + stepOfProg;
      numInProg = '..';
    } else numInProg = startOfProg + stepOfProg * i;
    strOfProg += `${numInProg} `;
  }
  return cons(strOfProg, missingNum);
};

const condition = () => {
  const progression = getProgression();
  const correctAnswer = String(cdr(progression));
  const question = car(progression);

  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);
