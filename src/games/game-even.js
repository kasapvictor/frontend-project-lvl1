import getRandom from '../utils/random.js';
import start from '../index.js';

const RULES = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const question = getRandom();
  const expectedAnswer = isEven(question);

  return [question, expectedAnswer];
};

export default () => start(game, RULES);
