import getRandom from '../utils/random.js';
import start from '../index.js';

const RULES = 'What number is missing in the progression?';
const MAX_LENGTH = 10;

const getProgression = (from, step, hiddenIndex) => {
  const progression = [];

  for (let i = 0; i < MAX_LENGTH; i += 1) {
    const current = from + (step * i);
    progression.push(current);
  }

  progression[hiddenIndex] = '..';

  return progression.join(' ');
};

const play = () => {
  const from = getRandom();
  const step = getRandom(2, 5);
  const hiddenIndex = getRandom(0, MAX_LENGTH - 1);
  const progression = getProgression(from, step, hiddenIndex);
  let expectedAnswer = '';

  for (let i = 0; i < MAX_LENGTH; i += 1) {
    const current = from + (step * i);
    if (i === hiddenIndex) {
      expectedAnswer = String(current);
    }
  }

  return [progression, expectedAnswer];
};

export default () => start(play, RULES);
