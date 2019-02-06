import readlineSync from 'readline-sync';

const startOfRange = 0;
const endOfRange = 1000;

const getRandomNumInRange = () => Math.floor(Math.random() * (endOfRange - startOfRange + 1))
+ startOfRange;

const numOfRounds = 3;

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= numOfRounds; i += 1) {
    const question = getRandomNumInRange();

    const userAnswer = readlineSync.question(`\nQuestion: ${question} \nYour answer: `);

    let correctAnswer = '';

    if (question % 2 === 0) {
      correctAnswer = 'yes';
    } correctAnswer = 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}`);
      i = numOfRounds;
      return;
    } console.log('Correct!');
  }
  console.log(`\nCongratulations, ${userName}!`);
};

export default isEven;
