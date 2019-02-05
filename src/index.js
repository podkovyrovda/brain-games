import readlineSync from 'readline-sync';

const isEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no"\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  
  const numOfRounds = 3;
  for (let i = 1; i <= numOfRounds; i += 1) {
    const getRandomNumInRange = () => Math.floor(Math.random() * endOfRange);
    const endOfRange = 1000;

    const num = getRandomNumInRange();

    const userAnswer = readlineSync.question(`\nQuestion: ${num} \nYour answer: `);

    const correctAnswer = 'Correct!';
    const correctAnswerWasYes = `'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${userName}`;
    const correctAnswerWasNo = `'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${userName}`;

    if ((userAnswer === 'yes' && num % 2 === 0) || (userAnswer === 'no' && num % 2 !== 0)) {
      console.log(correctAnswer);
    } else if (num % 2 === 0) {
      return console.log(correctAnswerWasYes);
    } else return console.log(correctAnswerWasNo);
  }
  return console.log(`\nCongratulations, ${userName}!`);
};

export default isEven;
