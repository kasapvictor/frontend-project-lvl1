import getRandom from '../utils/random.js';
import start from '../index.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => (n % 2 === 0);

const play = () => {
  const question = getRandom();
  const expectedAnswer = isEven(question) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => start(play, RULES);
