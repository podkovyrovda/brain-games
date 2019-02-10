import { cons } from 'hexlet-pairs';
import getRandomNumInRange from '../utils';
import makeGame from '../engine';

const greeting = 'What is the result of the expression?';

const startOfRange = 1;
const endOfRange = 10;
const operatorString = '+-*';

const condition = () => {
  const firstArgument = getRandomNumInRange(startOfRange, endOfRange);
  const secondArgument = getRandomNumInRange(startOfRange, endOfRange);

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
