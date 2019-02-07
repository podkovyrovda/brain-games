import { cons } from 'hexlet-pairs';
import getRandomNumInRange from '../modules/gerRandomNumInRange';
import makeGame from '../engine';

const greeting = 'What is the result of the expression?\n';

const condition = () => {
  const startOfRange = 1;
  const endOfRange = 10;
  const firstArgument = getRandomNumInRange(startOfRange, endOfRange);
  const secondArgument = getRandomNumInRange(startOfRange, endOfRange);

  const operatorString = '+-*';
  const randomPosition = getRandomNumInRange(0, operatorString.length - 1);
  const operator = operatorString[randomPosition];

  const question = `${firstArgument} ${operator} ${secondArgument}`;

  let correctAnswer = '';
  switch (operator) {
    case '+':
      correctAnswer = String(firstArgument + secondArgument);
      break;
    case '-':
      correctAnswer = String(firstArgument - secondArgument);
      break;
    default:
      correctAnswer = String(firstArgument * secondArgument);
      break;
  }
  return cons(question, correctAnswer);
};

export default () => makeGame(greeting, condition);