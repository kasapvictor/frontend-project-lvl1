import readlineSync from 'readline-sync';

const ROUNDS = 3;

const start = (game, rules) => {
  console.log('Welcome to the Brain Games!');

  console.log('May I have your name?');
  const userName = readlineSync.question('Your Name: ');

  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < ROUNDS; i += 1) {
    const [question, answer] = game();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default start;
