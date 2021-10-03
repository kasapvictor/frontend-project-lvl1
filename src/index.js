import readlineSync from 'readline-sync';
import CONFIG from './utils/config.js';

const end = () => {
  if (CONFIG.correct > CONFIG.wrong) {
    console.log(CONFIG.winText());
  } else {
    console.log(CONFIG.failText());
  }

  return true;

  // console.log(CONFIG.statistic);
  // console.log('Correct:', CONFIG.correct);
  // console.log('Wrong:', CONFIG.wrong);
};

const check = (userAnswer, answer, correct = false) => {
  if (correct) {
    CONFIG.correct += 1;
    console.log(CONFIG.correctText);
  } else {
    CONFIG.wrong += 1;
    console.log(CONFIG.incorrectText(userAnswer, answer));
  }
};

const process = () => {
  if (!CONFIG.game) return;

  const game = CONFIG.game();

  if (CONFIG.round === 1) console.log(game.rules);

  console.log(CONFIG.question(game.question));

  const userAnswer = readlineSync.question(CONFIG.askAnswer);

  check(userAnswer, game.answer, userAnswer === game.answer);

  CONFIG.round += 1;

  if (CONFIG.round <= CONFIG.limitRound) {
    process();
  } else {
    end();
  }
};

const greeting = (game) => {
  console.log(CONFIG.greeting);

  CONFIG.name = readlineSync.question(CONFIG.askName);

  console.log(CONFIG.hello());

  CONFIG.game = game;

  process();
};

export default greeting;
