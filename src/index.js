import readlineSync from 'readline-sync';
import CONFIG from './utils/config.js';
import hello from './cli.js';

const process = () => {
  if (!CONFIG.game) return;

  const game = CONFIG.game();

  if (CONFIG.round === 1) console.log(game.rules);

  console.log(CONFIG.question(game.question));

  const userAnswer = readlineSync.question(CONFIG.askAnswer);

  const checkAnswer = userAnswer === game.expectedAnswer;

  const isFinish = CONFIG.limitRound <= CONFIG.round;

  CONFIG.round += 1;

  if (!isFinish) {
    if (checkAnswer) {
      console.log(CONFIG.correctText);
      process();
    } else {
      console.log(CONFIG.incorrectText(userAnswer, game.expectedAnswer));
      console.log(CONFIG.failText());
    }
  } else {
    console.log(CONFIG.winText());
  }
};

const start = (game) => {
  CONFIG.game = game;

  hello();

  process();

  return true;
};

export default start;
