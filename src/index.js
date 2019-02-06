import readlineSync from 'readline-sync';

const startOfRange = 3;
const endOfRange = 856;

const getRandomNumInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const numOfRounds = 3;

const isEven = x => (x % 2 === 0);

const gameBrainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= numOfRounds; i += 1) {
    const question = getRandomNumInRange(startOfRange, endOfRange);

    const userAnswer = readlineSync.question(`\nQuestion: ${question} \nYour answer: `);

    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    } console.log('Correct!');
  }
  console.log(`\nCongratulations, ${userName}!`);
};

export { gameBrainEven, isEven };
