const CONFIG = {
  game: null,
  greeting: 'Welcome to the Brain Games!',
  askName: 'May I have your name? \n',
  askAnswer: 'Your answer: ',
  name: '',
  question: (question) => (`Question: ${question}`),
  hello: () => `Hello, ${CONFIG.name}!`,
  correctText: 'Correct!',
  incorrectText: (userAnswer, expectedAnswer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`,
  winText: () => `Congratulations, ${CONFIG.name}!`,
  failText: () => `Let's try again, ${CONFIG.name}!`,
  startRound: 1,
  limitRound: 3,
  round: 1,
  correct: 0,
  wrong: 0,
};

export default CONFIG;
