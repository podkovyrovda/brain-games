import { cons, car, cdr } from 'hexlet-pairs';
import { getRandomNumInRange } from '../utils';
import makeGame from '../engine';

const greeting = 'What number is missing in progression\n';

const condition = () => {
  const startOfRange = 1;
  const endOfRange = 10;
  const startOfProgression = getRandomNumInRange(startOfRange, endOfRange);
  const stepOfProgression = getRandomNumInRange(startOfRange, endOfRange);

  const elementsInProgression = 10;
  const randomElement = getRandomNumInRange(1, elementsInProgression);

  const strOfProgression = (startOfProgression, stepOfProgression) => {
    let numberInProgression = startOfProgression;
    let stringOfProgression = `${numberInProgression}`;
    let missingNumber = 0;

    for (let i = 1; i <= elementsInProgression; i += 1) {

      if (i === elementsInProgression) {
        stringOfProgression += ' .. ';
        return cons(strOfProgression, missingNumber)
      } if (i === randomElement) {
        numberInProgression += stepOfProgression;
        missingNumber = numberInProgression;
        stringOfProgression += ' .. ';
      }
      numberInProgression += stepOfProgression;
      stringOfProgression += ` ${numberInProgression}`;
    };

    return cons(stringOfProgression, missingNumber);
  };
  
  const getStrOfProgression = strOfProgression(startOfProgression, stepOfProgression);

  const correctAnswer = cdr(getStrOfProgression);
  const question = car(getStrOfProgression);

  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);
