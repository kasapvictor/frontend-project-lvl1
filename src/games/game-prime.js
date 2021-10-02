import getRandom from '../utils/random.js';

const isPrime = (n) => {
  let prime = true;

  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      prime = false;
      break;
    }
  }

  return prime;
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';
  const n = getRandom();
  const question = `${n}`;
  const answer = `${isPrime(n) ? 'yes' : 'no'}`;

  return { question, answer, rules };
};
