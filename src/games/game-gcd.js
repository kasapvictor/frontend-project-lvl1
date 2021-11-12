import getRandom from '../utils/random.js';
import start from '../index.js';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const game = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const a = getRandom();
  const b = getRandom();
  const question = `${a} ${b}`;
  const expectedAnswer = `${getGcd(a, b)}`;

  return [question, expectedAnswer, rules];
};

export default () => start(game);
