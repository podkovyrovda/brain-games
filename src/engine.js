import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (greeting, condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);
  console.log('');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');

  const numOfRounds = 3;

  for (let i = 1; i <= numOfRounds; i += 1) {
    const getCondition = condition();

    const question = car(getCondition);
    const correctAnswer = String(cdr(getCondition));

    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } console.log('Correct!');
  } console.log('Congratulations!');
};
