const CONFIG = {
  game: null,
  greeting: 'Welcome to the Brain Games!',
  askName: 'May I have your name? \n',
  askAnswer: 'Your answer: ',
  name: '',
  question: (question) => (`Round ${CONFIG.round} of 3: Question: ${question}`),
  hello: () => `Hello, ${CONFIG.name}! \n`,
  correctText: 'Correct! \n',
  incorrectText: 'Correct answer was "no"! \n',
  winText: () => `Congratulations, ${CONFIG.name}! \n`,
  failText: 'Don\'t be sad! Try again! \n',
  end: '--- GAVE OVER ---',
  statistic: '--- STATISTIC ---',
  startRound: 1,
  limitRound: 3,
  round: 1,
  correct: 0,
  wrong: 0,
};

export default CONFIG;
