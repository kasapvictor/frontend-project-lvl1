import getRandom from '../utils/random.js';

const getProgression = () => {
  const MAX_LENGTH = 10;
  const START = getRandom();
  const X = getRandom(2, 5);
  const Y = getRandom(0, MAX_LENGTH);
  const progression = [];

  for (let i = 0; i < MAX_LENGTH; i += 1) {
    const { length } = progression.length;
    const last = progression[length - 1];

    if (length > 0) {
      progression.push(last + X);
    } else {
      progression.push(START + X);
    }
  }

  const answer = progression[Y];
  progression[Y] = '..';

  return { progression: progression.join(' '), answer: `${answer}` };
};

export default () => {
  const task = getProgression();
  const rules = 'What number is missing in the progression?\n';
  const question = task.progression;
  const { answer } = task;

  return { question, answer, rules };
};
