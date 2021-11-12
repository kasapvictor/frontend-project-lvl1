import getRandom from '../utils/random.js';
import start from '../index.js';

const RULES = 'What number is missing in the progression?';

const getProgression = () => {
  const MAX_LENGTH = 10;
  const START = getRandom();
  const X = getRandom(2, 5);
  const Y = getRandom(0, MAX_LENGTH - 1);
  const progression = [];

  for (let i = 0; i < MAX_LENGTH; i += 1) {
    const { length } = progression;
    const last = progression[length - 1];

    if (length > 0) {
      progression.push(last + X);
    } else {
      progression.push(START + X);
    }
  }

  const expectedAnswer = progression[Y];
  progression[Y] = '..';

  return { progression: progression.join(' '), expectedAnswer: `${expectedAnswer}` };
};

const game = () => {
  const task = getProgression();
  const question = task.progression;
  const { expectedAnswer } = task;

  return [question, expectedAnswer];
};

export default () => start(game, RULES);
