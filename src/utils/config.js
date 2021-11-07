const CONFIG = {
  game: null,
  askAnswer: 'Your answer: ',
  name: '',
  question: (question) => (`Question: ${question}`),
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
