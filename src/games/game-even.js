import getRandom from '../utils/random.js';

const isEven = (n) => (n % 2 === 0 ? 'yes' : 'no');

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".\n';
  const question = getRandom();
  const answer = isEven(question);

  return { question, answer, rules };
};
