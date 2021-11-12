import getRandom from '../utils/random.js';
import start from '../index.js';

const RULES = 'What is the result of the expression?';

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

const game = () => {
  const SYMBOL = ['+', '-', '*'];
  const a = getRandom();
  const b = getRandom();
  const s = SYMBOL[getRandom(0, 2)];

  const expectedAnswer = `${calc(a, b, s)}`;
  const question = `${a} ${s} ${b}`;

  return [question, expectedAnswer];
};

export default () => start(game, RULES);
