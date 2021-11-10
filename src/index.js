import readlineSync from 'readline-sync';

const start = (game) => {
  console.log('Welcome to the Brain Games!');

  const askName = readlineSync.question('May I have your name? \n');
  const userName = askName.length !== 0 ? askName : 'John Doe';

  console.log(`Hello, ${userName}!`);

  const ROUNDS = 3;

  for (let i = 0; i < ROUNDS; i += 1) {
    const dataGame = game();
    const question = dataGame[0];
    const answer = dataGame[1];
    // console.log('answer', answer);
    const rules = dataGame[2];
    const userAnswer = readlineSync.question(`${question}\n`);
    const checkAnswer = userAnswer === answer;

    if (i === 0) {
      console.log(rules);
    }

    if (i < ROUNDS && checkAnswer) {
      console.log('Correct!');

      if (i + 1 === ROUNDS) {
        console.log(`Congratulations, ${userName}!`);
      }
    }

    if (!checkAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }

  return true;
};

export default start;
