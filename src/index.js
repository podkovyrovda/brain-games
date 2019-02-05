import readlineSync from 'readline-sync';

const greeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const padding = () => console.log('\n');

const isEven = () => {
  let num = Math.random();

  const correctAnswer = console.log('Correct!');
  const wrongAnswer = console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${showCorrectAnswer}\'.`)

  const showCorrectAnswer = () => {
    if (num % 2 === 0) { 
      return  "yes"
    };
    return "no"
  };

  const userAnswer = readlineSync.question('Question: ${num} /n Your answer: ');
  if (isNaN(userAnswer)) {

  }
};

export { greeting, padding, isEven }
