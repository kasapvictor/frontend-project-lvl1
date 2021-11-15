import getRandom from '../utils/random.js';
import start from '../index.js';

const RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }

  let prime = true;

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }

  return prime;
};

const play = () => {
  const n = getRandom();
  const question = `${n}`;
  const expectedAnswer = isPrime(n) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => start(play, RULES);
