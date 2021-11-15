import getRandom from '../utils/random.js';
import start from '../index.js';

const RULES = 'What number is missing in the progression?';
const MAX_LENGTH = 10;

const getProgression = (step) => {
  const START = getRandom();
  const progression = [];

  for (let i = 0; i < MAX_LENGTH; i += 1) {
    const current = START + (step * i);
    progression.push(current);
  }

  return progression;
};

const play = () => {
  const step = getRandom(2, 5);
  const hiddenIndex = getRandom(0, MAX_LENGTH - 1);
  const progression = getProgression(step);
  const expectedAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  return [progression.join(' '), expectedAnswer];
};

export default () => start(play, RULES);
