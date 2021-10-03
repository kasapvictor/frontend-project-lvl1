import readlineSync from 'readline-sync';
import CONFIG from './utils/config.js';
import hello from './cli.js';

const check = (userAnswer, expectedAnswer, correct = false) => {
  if (correct) {
    CONFIG.correct += 1;
    console.log(CONFIG.correctText);
  } else {
    CONFIG.wrong += 1;
    console.log(CONFIG.incorrectText(userAnswer, expectedAnswer));
  }
};

const end = () => {
  if (CONFIG.correct > CONFIG.wrong) {
    console.log(CONFIG.winText());
  } else {
    console.log(CONFIG.failText());
  }

  console.log(CONFIG.statistic);
  console.log('Correct:', CONFIG.correct);
  console.log('Wrong:', CONFIG.wrong);
};

const process = () => {
  if (!CONFIG.game) return;

  const game = CONFIG.game();

  if (CONFIG.round === 1) console.log(game.rules);

  console.log(CONFIG.question(game.question));

  const userAnswer = readlineSync.question(CONFIG.askAnswer);

  check(userAnswer, game.expectedAnswer, userAnswer === game.expectedAnswer);

  CONFIG.round += 1;

  if (CONFIG.round <= CONFIG.limitRound) {
    process();
  } else {
    end();
  }
};

const start = (game) => {
  CONFIG.game = game;

  hello();

  process();
};

export default start;
