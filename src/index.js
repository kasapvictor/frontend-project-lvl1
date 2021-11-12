import readlineSync from 'readline-sync';

const start = (game, rules) => {
  console.log('Welcome to the Brain Games!');

  const askName = readlineSync.question('May I have your name? \nYour Name: ');
  const userName = askName.length !== 0 ? askName : 'John Doe';

  console.log(`Hello, ${userName}!`);

  console.log(rules);

  const ROUNDS = 3;

  for (let i = 0; i < ROUNDS; i += 1) {
    const gameData = game();
    const question = gameData[0];
    const answer = gameData[1];
    console.log('answer:', answer);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const checkAnswer = userAnswer === answer;

    if (!checkAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default start;
