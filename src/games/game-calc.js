import getRandom from '../utils/random.js';
import start from '../index.js';

const RULES = 'What is the result of the expression?';
const SYMBOL = ['+', '-', '*'];

const calc = (a, b, symbol) => {
  switch (symbol) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`operation ${symbol} is not supported`);
  }
};

const play = () => {
  const numberA = getRandom();
  const numberB = getRandom();
  const operator = SYMBOL[getRandom(0, 2)];
  const resultCalc = calc(numberA, numberB, operator);

  const expectedAnswer = String(resultCalc);
  const question = `${numberA} ${operator} ${numberB}`;

  return [question, expectedAnswer];
};

export default () => start(play, RULES);
