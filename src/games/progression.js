import { cons, car, cdr } from 'hexlet-pairs';
import getRandomNumInRange from '../utils';
import makeGame from '../engine';

const greeting = 'What number is missing in the progression';

const startOfRange = 1;
const endOfRange = 10;
const elementsInProg = 10;

const condition = () => {
  const startOfProg = getRandomNumInRange(startOfRange, endOfRange);
  const stepOfProg = getRandomNumInRange(startOfRange, endOfRange);

  const randomElem = getRandomNumInRange(1, elementsInProg);

  const getProgression = () => {
    let numInProg = startOfProg;
    let strOfProg = '';
    let missingNum = 0;

    for (let i = 1; i <= elementsInProg; i += 1) {
      if (i === randomElem) {
        missingNum = numInProg;
        strOfProg += '.. ';
        numInProg += stepOfProg;
      } else {
        strOfProg += `${numInProg} `;
        numInProg += stepOfProg;
      }
    }
    return cons(strOfProg, missingNum);
  };

  const progression = getProgression(startOfProg, stepOfProg);
  const correctAnswer = cdr(progression);
  const question = car(progression);

  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);
