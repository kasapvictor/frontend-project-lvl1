import readlineSync from 'readline-sync';
import getRandom from './helpers.js';

const END = '--- GAVE OVER ---';
const STATISTIC = '--- STATISTIC ---';
const LIMIT = 3;

let name = '';
let round = 1;
let correct = 0;
let wrong = 0;

const check = (n) => (n % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const random = getRandom();

  console.log(`Round ${round} of 3: Question: ${random}`);

  const answer = readlineSync.question('Your answer: ');
  const isEven = check(random);

  if (answer === isEven) {
    console.log('Correct! \n');
    correct += 1;
  } else {
    wrong += 1;
    console.log('Correct answer was "no"! \n');
  }

  round += 1;

  if (round <= LIMIT) {
    game();
  } else {
    console.log(END);

    if (correct > wrong) {
      console.log(`Congratulations, ${name}! \n`);
    } else {
      console.log('Don\'t be sad! Try again! \n');
    }

    console.log(STATISTIC);
    console.log('Correct:', correct);
    console.log('Wrong:', wrong);
  }
};

const init = () => {
  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? \n');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

  game();
};

export default init;
