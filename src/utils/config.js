const CONFIG = {
  game: null,
  greeting: 'Welcome to the Brain Games!',
  askName: 'May I have your name?',
  askAnswer: 'Your answer: ',
  name: '',
  question: (question) => (`Round ${CONFIG.round} of 3: Question: ${question}`),
  hello: () => `Hello, ${CONFIG.name}!`,
  correctText: 'Correct!',
  // incorrectText: 'Correct answer was "no"! \n',
  incorrectText: (userAnswer, answer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\n`,
  winText: () => `Congratulations, ${CONFIG.name}!`,
  failText: () => `Don't be sad, ${CONFIG.name}! Try again!`,
  end: '--- GAVE OVER ---',
  statistic: '--- STATISTIC ---',
  startRound: 1,
  limitRound: 3,
  round: 1,
  correct: 0,
  wrong: 0,
};

export default CONFIG;
