import readlineSync from 'readline-sync';

const greeting = () => { 
    const userName = readlineSync.question('May I have your name? ');
    const greeting = console.log('Hello, ' + userName + '!');
}

export { greeting }