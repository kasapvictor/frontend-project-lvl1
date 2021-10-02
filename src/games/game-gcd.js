import getRandom from '../utils/random.js';

const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const a = getRandom();
  const b = getRandom();
  const question = `${a} ${b}`;
  const answer = `${getGcd(a, b)}`;

  return { question, answer, rules };
};
