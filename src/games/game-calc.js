import getRandom from '../utils/random.js';

const calc = (a, b, symbol) => {
  let result = false;

  switch (symbol) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      return result;
  }

  return result;
};

export default () => {
  const SYMBOL = ['+', '-', '*'];
  const a = getRandom();
  const b = getRandom();
  const symbol = SYMBOL[getRandom(0, 2)];

  const rules = 'What is the result of the expression?\n';
  const answer = `${calc(a, b, symbol)}`;
  const question = `${a} ${symbol} ${b}`;

  return { question, answer, rules };
};
