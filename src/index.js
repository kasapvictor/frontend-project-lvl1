import readlineSync from 'readline-sync';
import hello from './cli.js';

const CONFIG = {
  game: null,
  round: 1,
  limitRound: 3,
  question: (question) => (`Question: ${question}`),
  askName: 'May I have your name? \n',
  askAnswer: 'Your answer: ',
  correctText: 'Correct!',
  incorrectText: (userAnswer, expectedAnswer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`,
  winText: () => `Congratulations, ${CONFIG.name}!`,
  failText: () => `Let's try again, ${CONFIG.name}!`,
};

const process = () => {
  if (!CONFIG.game) return;

  const game = CONFIG.game();

  if (CONFIG.round === 1) console.log(game.rules);

  console.log(CONFIG.question(game.question));

  const userAnswer = readlineSync.question(CONFIG.askAnswer);

  const checkAnswer = userAnswer === game.expectedAnswer;

  const isFinish = CONFIG.limitRound <= CONFIG.round;

  CONFIG.round += 1;

  if (!isFinish && checkAnswer) {
    console.log(CONFIG.correctText);
    process();
  }

  if (isFinish && checkAnswer) {
    console.log(CONFIG.correctText);
    console.log(CONFIG.winText());
  }

  if (!checkAnswer) {
    console.log(CONFIG.incorrectText(userAnswer, game.expectedAnswer));
    console.log(CONFIG.failText());
  }
};

const start = (game) => {
  CONFIG.game = game;

  hello();

  process();

  return true;
};

export default start;
