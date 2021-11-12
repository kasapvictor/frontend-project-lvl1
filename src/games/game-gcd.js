import getRandom from '../utils/random.js';
import start from '../index.js';

const RULES = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const game = () => {
  const a = getRandom();
  const b = getRandom();
  const question = `${a} ${b}`;
  const expectedAnswer = `${getGcd(a, b)}`;

  return [question, expectedAnswer];
};

export default () => start(game, RULES);
