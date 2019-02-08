import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default (greeting, condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(greeting);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');

  const numOfRounds = 3;

  for (let i = 1; i <= numOfRounds; i += 1) {
    const getCondition = condition();

    const question = car(getCondition);
    const correctAnswer = cdr(getCondition);
    
    const rekursiya = () => {
      const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);

      if (correctAnswer === String(correctAnswer)) {
        if (userAnswer !== 'yes' && userAnswer !== 'no') {
          console.log('\nEnter yes or no\n');
          return rekursiya();
        } if (userAnswer !== correctAnswer) {
          console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${userName}!`);
          return rekursiya();
        } console.log('Correct!');   
      } else {
        if (Number(userAnswer) === NaN) {
          console.log('\nEnter num\n')
          return rekursiya();
        } if (Number(userAnswer) !== Number(correctAnswer)) {
          console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${userName}!`);
          return rekursiya();
        } console.log('Correct!');
      }
  };
  rekursiya();
  } console.log('Congratulations!');
};
