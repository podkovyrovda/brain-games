import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import { numOfRounds } from './settings';

export default (greeting, condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');

  for (let i = 1; i <= numOfRounds; i += 1) {
    const getCondition = condition();

    const question = car(getCondition);
    const correctAnswer = cdr(getCondition);

    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  } console.log('Congratulations!');
};
