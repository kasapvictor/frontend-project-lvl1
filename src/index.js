import readlineSync from 'readline-sync';

const start = (game) => {
  console.log('Welcome to the Brain Games!');

  const askName = readlineSync.question('May I have your name? \nYour Name: ');
  const userName = askName.length !== 0 ? askName : 'John Doe';

  console.log(`Hello, ${userName}!`);

  const ROUNDS = 3;

  for (let i = 0; i < ROUNDS; i += 1) {
    const gameData = game();
    const question = gameData[0];
    const answer = gameData[1];
    // console.log('answer:', answer);
    const rules = gameData[2];

    if (i === 0) {
      console.log(rules);
    }

    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const checkAnswer = userAnswer === answer;

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
